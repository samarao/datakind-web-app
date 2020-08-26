import JSONSerializer from '@ember-data/serializer/json';

export default JSONSerializer.extend({
  serialize(snapshot) {
    return {
      animalId: snapshot.attr('animalId'),
      image: snapshot.attr('image')
    }
  },

  extractId(model, hash) {
    return hash.animal.id;
  },

  normalize(modelClass, resourceHash) {

    if (resourceHash.image && resourceHash.analysis) {
      resourceHash.image.overallScore = resourceHash.analysis.overall_score * 20;
      delete resourceHash.analysis.overall_score;
  
      resourceHash.image.analysis = resourceHash.analysis;
      resourceHash.image.s3_url = resourceHash.image.path.s3_url;
      resourceHash.image.http_url = resourceHash.image.path.http_url;
      delete resourceHash.analysis;
      delete resourceHash.image.path;
  
      resourceHash.images = [resourceHash.image];
      delete resourceHash.image;
    }

    return this._super(...arguments);
  },

  normalizeFindAllResponse(store, primaryModelClass, payload) {
    const newPayload = payload.map((value) => {
      value.images.forEach((image) => {
        image.overallScore = image.analysis.overall_score * 20;
        delete image.analysis.overall_score;
      });
      return value;
    });
    return this._super(store, primaryModelClass, newPayload);

  }
});
