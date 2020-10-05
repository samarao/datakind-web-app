import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { task, all, timeout } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default Controller.extend({
  fileQueue: service(),

  formInvalid: computed('animalId', function() {
    return !this.get('animalId');
  }),

  showUpload: false,
  fileUploadCalled: 0,
  fileUploadCompleted: 0,

  init() {
    this._super(...arguments);
    this.uploadTaskInstances = [];
    if (localStorage.getItem("animalId")) {
      localStorage.removeItem("animalId");
    }
    this.set('apiError', false);
    this.set('animalId', undefined);
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

      localStorage.setItem("animalId", this.get('animalId'));
  
      let animal = yield fetch('http://3.81.209.36/score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          animal_id: this.get('animalId'),
          images: [file.url]
        })
      }).then(response => response.json()).catch(() => {
        this.set('apiError', true);
      });

      if (!this.apiError) {
        let original = this.store.peekRecord('animal', animal.body.animal.id);
  
        if (original && original.images) {
          delete animal.statusCode;
          animal = animal.body;
          delete animal.body
      
          animal.images.forEach((image) => {
            image.overallScore = image.analysis.overall_score * 20;
            delete image.analysis.overall_score;
            original.images.push(image);
          });
        } else {
          this.store.push(this.store.normalize('animal', animal));
        }
    
        this.fileUploadCompleted++;
    
        if (this.fileQueue.files.length === this.fileUploadCompleted) {
          if (!this.fileTooBig && !this.tooManyFiles) {
          this.transitionToRoute('photo-analysis.index');
          }
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
