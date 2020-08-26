import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { task, all, timeout } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default Controller.extend({
  fileQueue: service(),
  animalId: undefined,

  formInvalid: computed('animalId', function() {
    return !this.get('animalId');
  }),

  showUpload: false,
  fileUploadCalled: 0,
  fileUploadCompleted: 0,

  init() {
    this._super(...arguments);
    this.uploadTaskInstances = [];
  },

  watchUploadTask: task(function * () {
    yield timeout(200);
    yield all(this.uploadTaskInstances);
    // if (!this.fileTooBig && !this.tooManyFiles) {
    //   this.transitionToRoute('photo-analysis.index');
    // }
  }).restartable(),

  uploadImageTask: task(function * (file) {
    if ((file.size * 1.333) < 6e+6) {

      yield file.readAsDataURL().then((url) => {
        file.set('url', url)
      });
  
      let animal = yield fetch('https://tzupxtpfmg.execute-api.us-east-1.amazonaws.com/Prod/score-image', {
        method: 'POST',
        body: JSON.stringify({
          animalId: this.get('animalId'),
          image: file.url
        })
      }).then(response => response.json());
  
      let original = this.store.peekRecord('animal', animal.animal.id);
  
      if (original) {
        animal.image.overallScore = animal.analysis.overall_score * 20;
        delete animal.analysis.overall_score;
    
        animal.image.analysis = animal.analysis;
        animal.image.s3_url = animal.image.path.s3_url;
        animal.image.http_url = animal.image.path.http_url;
        delete animal.analysis;
        delete animal.image.path;
  
        original.images.push(animal.image);
      } else {
        this.store.push(this.store.normalize('animal', animal));
      }
  
      this.fileUploadCompleted++;
  
      if (this.fileQueue.files.length === this.fileUploadCompleted) {
        if (!this.fileTooBig && !this.tooManyFiles) {
        this.transitionToRoute('photo-analysis.index');
        }
      }
    } else {
      this.set('fileTooBig', true);
    }
  }).enqueue(),

  actions: {
    uploadImage(file) {
      this.fileUploadCalled++;
      if (this.fileUploadCalled <= 3) {
        this.watchUploadTask.perform();
        this.uploadTaskInstances.push(this.uploadImageTask.perform(file));
      } else {
        this.set('tooManyFiles', true);
      }
    }
  }
});
