import RESTAdapter from '@ember-data/adapter/rest';

export default RESTAdapter.extend({
  host: 'https://3.81.209.36',

  urlForCreateRecord() {
    return `${this.host}/score`;
  },

  urlForQueryRecord(params) {
    const { id } = params;
    delete params.id;
    return `${this.host}/images/${id}`;
  }
});
