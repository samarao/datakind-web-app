import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  feedback: attr(),

  animal: belongsTo(),
});
