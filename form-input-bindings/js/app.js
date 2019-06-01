let app = new Vue({
    el: '#app',
    data: {
        message: '',
        checked: false,
        checkedNames: [],
        picked: '',
        selected: '',
        multipleSelected: '',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' },
            { text: 'All', value: 'ABC' }
        ]

    },
    methods: {
        selectAll: function() {

        }
    },
    computed: {

    }
});
