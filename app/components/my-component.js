import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        myFunc() {
            // this.sendAction("myFunc");
            var model = this.get("model");
            model.push({name: 3})
            this.set("model", model);
            console.log(model);
        }
    },
    number: null,
    page: null,

    pageNumber: Ember.computed( "number", "page", function () {
            var number = this.get("number");
            var page = this.get("page");

            return `weqewq ${number} gfdhgfdhtg ${page}`;
    } )
});
