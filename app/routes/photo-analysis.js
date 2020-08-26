import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const animal = this.store.findAll('animal', {});
    return animal;
  }
});
