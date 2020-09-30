import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const image = this.modelFor('photo-analysis');
    this.set('imageId', params.id);
    return image;
    // find((model) => {
    //   return model.images.find((image) => {
    //     return image.id === params.id;
    //   });
    // });
    // return image.images.find((photo) => {
    //   return photo.id === params.id;
    // });
  },

  afterModel(model) {
    debugger
    if (!model.analysis) {
      const image = model.images.find((image) => {
        return image.id === this.imageId;
      });
      debugger
    }
  }
});
