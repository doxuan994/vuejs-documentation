let myMixin = {
    created: function() {
        this.hello();
    },
    methods: {
        hello: function() {
            console.log('hello from mixin');
        }
    }
}


let Component = Vue.extend({
    mixins: [myMixin]
});

let component = new Component();

new Vue({
    el: '#app',
    data: {

    },
    methods: {

    },
    computed: {

    }
});
