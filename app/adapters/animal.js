import RESTAdapter from '@ember-data/adapter/rest';

// https://tzupxtpfmg.execute-api.us-east-1.amazonaws.com/Prod/score-image

export default RESTAdapter.extend({
  host: 'https://tzupxtpfmg.execute-api.us-east-1.amazonaws.com',

  urlForCreateRecord() {
    return `${this.host}/Prod/score-image`;
  },

  urlForFindAll() {
    return `${this.host}/Prod/list`;
  }
});
