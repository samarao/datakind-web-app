import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  images: attr(),
  animal: attr(),

  feedback: belongsTo()
});
