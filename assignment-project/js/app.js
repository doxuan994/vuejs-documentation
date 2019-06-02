Vue.component('name-component', {
    props: {
        firstname: String
    },


    template: '<h3>{{firstname}}</h3>'
});




new Vue({
    el: '#app',
    data: {
        names: ['Sophia', 'Jackson', 'Olivia', 'Liam', 'Emma', 'Noah', 'Ava', 'Aiden', 'Isabella', 'Caden']
    },
    methods: {

    },
    computed: {

    }
});
