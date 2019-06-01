let app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        name: 'Hello from Vue.js!'
    },
    methods: {
        greet: function(event) {
            alert(this.name);


            if (event) {
                alert(event.target.tagName);
            }
        },
        say: function(message) {
            alert(message);
        },
        warn: function(message, event) {
            if (event) {
                event.preventDefault();
            }
            alert(message);
        }
    },
    computed: {

    }
});


// app.greet();
