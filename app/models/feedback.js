import Model, { attr } from '@ember-data/model';

export default Model.extend({
  animal_id: attr(),
  image_id: attr(),
  feedback: attr(),
});
