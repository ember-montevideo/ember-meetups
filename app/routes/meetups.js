import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return Ember.A(meetupList.slice());
  }
});

export var meetupList = [
  {
    "id": "montevideo",
    "name": "Montevideo, Uruguay",
    "imageURL": "images/logos/montevideo.jpeg",
    "date": "2014-01-31",
    "url": "http://www.meetup.com/ember-montevideo/",
    "members": 87,
  },
  {
    "id": "medellin",
    "name": "Medellín, Colombia",
    "imageURL": "images/logos/medellin.jpeg",
    "date": "2015-04-08",
    "url": "http://www.meetup.com/Ember-Medellin/",
    "members": 136,
  },
  {
    "id": "munich",
    "name": "Munich, Alemania",
    "imageURL": "images/logos/munich.jpeg",
    "date": "2013-01-23",
    "url": "http://www.meetup.com/Ember-js-Munich/",
    "members": 233,
  },
  {
    "id": "houston",
    "name": "Houston, TX",
    "imageURL": "images/logos/houston.jpeg",
    "date": "2015-03-06",
    "url": "http://www.meetup.com/EmberJS-Houston/",
    "members": 103,
  },
  {
    "id": "houston",
    "name": "Budapest, Hungría",
    "imageURL": "images/logos/budapest.jpeg",
    "date": "2013-07-15",
    "url": "http://www.meetup.com/ember-bp/",
    "members": 146,
  },
  {
    "id": "madrid",
    "name": "Madrid, España",
    "imageURL": "images/logos/madrid.jpeg",
    "date": "2014-12-13",
    "url": "http://www.meetup.com/Ember-js-Madrid/",
    "members": 265,
  },

];