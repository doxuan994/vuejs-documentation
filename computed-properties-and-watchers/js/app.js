let vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    methods: {
        toUpperCase: function() {
            return this.message.toUpperCase();
        }
    },
    computed: {
        // a computed getter
        reversedMessage: function() {
            return this.message.split('').reverse().join('');
        }
    }
});
