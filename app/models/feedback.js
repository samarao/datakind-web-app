import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  animal_id: attr(),
  image_id: attr(),
  feedback: attr(),

  animal: belongsTo(),
});
