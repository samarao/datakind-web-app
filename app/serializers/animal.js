import JSONSerializer from '@ember-data/serializer/json';

export default JSONSerializer.extend({
  serialize(snapshot) {
    return {
      animalId: snapshot.attr('animalId'),
      image: snapshot.attr('image')
    }
  },

  extractId(model, hash) {
    if (hash.body) {
      return hash.body.animal.id;
    } else {
      return hash.animal.id;
    }
  },

  normalize(modelClass, resourceHash) {
    if (resourceHash.body) {
      delete resourceHash.statusCode;
      resourceHash = resourceHash.body;
      delete resourceHash.body;

      resourceHash.images.forEach((image) => {
        image.overallScore = (image.analysis.overall_score + 6) * 10;
        delete image.analysis.overall_score;
      });
    }

    return this._super(...arguments);
  },

  normalizeFindAllResponse(store, primaryModelClass, payload) {
    const newPayload = payload.map((value) => {
      value.images.forEach((image) => {
        image.overallScore = (image.analysis.overall_score + 6) * 10;
        delete image.analysis.overall_score;
      });
      return value;
    });
    return this._super(store, primaryModelClass, newPayload);

  },

  normalizeQueryRecordResponse(store, primaryModelClass, payload) {
    delete payload.statusCode;
    payload = payload.body;
    delete payload.body;

      payload.images.forEach((image) => {
        image.overallScore = (image.analysis.overall_score + 6) * 10;
        delete image.analysis.overall_score;
      });
    return this._super(store, primaryModelClass, payload);

  }
});
