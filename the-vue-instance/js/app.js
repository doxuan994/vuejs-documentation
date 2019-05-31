let obj = {
    foo: 'bar'
};

Object.freeze(obj);

let app = new Vue({
    el: '#app',
    data: obj
});



let data = {a: 1};

let vm = new Vue({
    el: '#example',
    data: data
});

console.log(vm.$data === data); // true
console.log(vm.$el === document.getElementById('example')); // true

// $watch is an instance method






let app2 = new Vue({
    el: '#app2',
    data: {
        a: 1
    },
    created: function() {
        console.log('a is: ' + this.a); // a is: 1
    }
});





















































//
