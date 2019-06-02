let app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello Vue!'
    }
});


let app2 = new Vue({
    el: '#app2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});


let app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    },
    methods: {
        toggleSeen: function() {
            if (this.seen == true) {
                this.seen = false;
            } else {
                this.seen = true;
            }
        }
    }
});

let app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});


let app5 = new Vue({
    el: '#app5',
    data: {
        msg: 'Hello Vue.js!'
    },
    methods: {
        reverseMsg: function() {
            this.msg = this.msg.split('').reverse().join('');
        }
    }
});

let app6 = new Vue({
    el: '#app6',
    data: {
        msg: 'Hello Vue.js!'
    }
});




Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});



var app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})
