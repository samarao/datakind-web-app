import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('documentation');
  this.route('about');
  this.route('upload');
  this.route('photo-analysis', function() {
    this.route('index', { path: '/' });
    this.route('animal', { path: ':id' });
  });
});

export default Router;
