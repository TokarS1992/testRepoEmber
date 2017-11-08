import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{name: "tes1"}, {name: "test2"}, {name: "test3"}];
        // return this.store.find("article", params.id);
    }
});
