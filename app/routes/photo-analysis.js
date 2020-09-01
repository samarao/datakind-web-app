import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let animalId = sessionStorage.getItem("animalId") || '1234';
    const animal = this.store.findAll('animal', {});
    return animal;
  }
});
