import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  showingFeedbackModal: false,
  generalFeedbackScore: '',
  showsThanks: false,

  actions: {
    sendPositiveFeedback() {
      this.store.createRecord('feedback', {
        animal_id: this.animalId,
        image_id: this.imageId,
        feedback: 'Positive'
      });

      this.toggleProperty('showsThanks');
    },

    toggleFeedbackModal() {
      this.set('generalFeedbackScore', event.target.textContent);
      this.toggleProperty('showingFeedbackModal');
    },

    submit(feedback) {
      this.store.createRecord('feedback', {
        animal_id: localStorage.getItem("animalId"),
        image_id: this.imageId,
        feedback: JSON.stringify(feedback)
      }).save();
      this.toggleProperty('showsThanks');
      this.toggleProperty('showingFeedbackModal');
    },

    rollback() {
      this.toggleProperty('showingFeedbackModal');
    }
  }
});
