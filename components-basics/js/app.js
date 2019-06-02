Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{count}} times.</button>'
});

Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{title}}</h3>'
});


Vue.component('blog-post-2', {
    props: ['post'],
    template: `
    <div class="blog-post">
    <h3>{{ post.title }}</h3>
    <div v-html="post.content"></div>
    </div>
    `
});



new Vue({
    el: '#app',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ]
    },
    methods: {

    },
    computed: {

    }
});
