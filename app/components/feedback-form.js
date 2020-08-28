import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  showingFeedbackModal: false,
  generalFeedbackScore: '',

  actions: {
    sendPositiveFeedback() {
      this.store.createRecord('feedback', {
        animal_id: this.animalId,
        image_id: this.imageId,
        feedback: 'Positive'
      });
    },

    toggleFeedbackModal() {
      this.set('generalFeedbackScore', event.target.textContent);
      this.toggleProperty('showingFeedbackModal');
    },

    submit(feedback) {
      feedback.animalId = sessionStorage.getItem("animalId");
      feedback.imageId = this.imageId;
      this.store.createRecord('feedback', {
        feedback: JSON.stringify(feedback)
      });
    },

    rollback() {
      this.toggleProperty('showingFeedbackModal');
    }
  }
});
