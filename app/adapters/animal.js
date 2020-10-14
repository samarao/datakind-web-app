import RESTAdapter from '@ember-data/adapter/rest';

export default RESTAdapter.extend({
  host: 'https://k0ml8p1v7h.execute-api.us-east-1.amazonaws.com',

  urlForCreateRecord() {
    return `${this.host}/prod/score`;
  },

  urlForQueryRecord(params) {
    const { id } = params;
    delete params.id;
    return `${this.host}/prod/images/${id}`;
  }
});
