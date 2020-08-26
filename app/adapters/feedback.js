import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default JSONAPIAdapter.extend({
  host: 'https://tzupxtpfmg.execute-api.us-east-1.amazonaws.com',
  
  urlForCreateRecord() {
    return `${this.host}/Prod/feedback`
  }
});
