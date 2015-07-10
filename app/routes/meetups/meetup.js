import Ember from "ember";
import { meetupList } from "../meetups";

export default Ember.Route.extend({
  model: function(params) {
    return meetupList.find((model) => model.id === params.id);
  },

  actions: {
    favorite: function() {
      let favValue = Ember.get(this.currentModel, "fav")
      Ember.set(this.currentModel, "fav", !favValue);
    }
  },
});
