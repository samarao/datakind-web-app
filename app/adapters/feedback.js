import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default JSONAPIAdapter.extend({
  host: 'http://3.81.209.36',
  
  urlForCreateRecord() {
    return `${this.host}/feedback`
  }
});
