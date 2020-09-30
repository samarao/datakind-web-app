import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default JSONAPIAdapter.extend({
  host: 'https://3.81.209.36',
  
  urlForCreateRecord() {
    return `${this.host}/feedback`
  }
});
