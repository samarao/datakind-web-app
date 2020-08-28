import Component from '@ember/component';
import { computed } from '@ember/object';

const GOOD_CHARACTERISTIC_TITLES = {
  good_prop: 'Flowers or basket are present',
  bad_prop: 'Leash is not visible',
  clean_background: 'Background has no distractions',
  animal_fills_frame: 'Animal fills the frame'
};

const BAD_CHARACTERISTIC_TITLES = {
  good_prop: 'Flowers or basket are not present',
  bad_prop: 'Leash is visible',
  clean_background: 'Background is distracting',
  animal_fills_frame: 'Animal does not fill the frame'
};

export default Component.extend({
  characteristicImage: computed('score', 'characteristic', function() {
    if (this.characteristic !== 'bad_prop') {
      return this.score === 1 ? "../assets/images/correct.svg" : "../assets/images/close.svg";
    } else {
      return this.score === 1 ? "../assets/images/close.svg" : "../assets/images/correct.svg";
    }
  }),

  characteristicTitle: computed('score', 'characteristic', function() {
    if (this.characteristic !== 'bad_prop') {
      return this.score === 1 ? GOOD_CHARACTERISTIC_TITLES[this.characteristic] : BAD_CHARACTERISTIC_TITLES[this.characteristic];
    } else {
      return this.score === 1 ? BAD_CHARACTERISTIC_TITLES[this.characteristic] : GOOD_CHARACTERISTIC_TITLES[this.characteristic];
    }
  }),

  characteristicClass: computed('score', 'characteristic', function() {
    if (this.characteristic !== 'bad_prop') {
      return this.score === 1 ? "text--good-characteristics" : "text--bad-characteristics";
    } else {
      return this.score === 1 ? "text--bad-characteristics" : "text--good-characteristics";
    }
  })
});
