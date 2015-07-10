import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('meetups', { path: "meetups" }, function() {
    this.route('meetup', { path: ':id' });
  });
});

export default Router;
