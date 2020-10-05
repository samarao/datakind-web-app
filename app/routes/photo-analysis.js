import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let animalId = localStorage.getItem("animalId") || '1234';
    const animal = this.store.queryRecord('animal', { id: animalId });
    return animal;
  }
});
