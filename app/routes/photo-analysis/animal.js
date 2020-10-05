import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const animal = this.modelFor('photo-analysis');
      return animal.images.find((image) => {
        return image.id === params.id;
      });
  },
});
