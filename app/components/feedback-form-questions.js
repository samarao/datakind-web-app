import Component from '@ember/component';

export default Component.extend({
  actions: {
    submit() {
      let feedback = {};
      feedback.good_prop = this.char1 ? 'helpful' : 'not helpful';
      feedback.bad_prop = this.char2 ? 'helpful' : 'not helpful';
      feedback.clean_background = this.char3 ? 'helpful' : 'not helpful';
      feedback.animal_fills_frame = this.char4 ? 'helpful' : 'not helpful';
      feedback.additionalComments = this.additionalComments;
      this.submit(feedback);
    },

    rollback() {
      this.rollback();
    }
  }
});
