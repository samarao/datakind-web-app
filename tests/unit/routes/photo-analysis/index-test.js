import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | photo-analysis/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:photo-analysis/index');
    assert.ok(route);
  });
});
