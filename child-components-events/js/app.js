Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div class="blog-post">
    <h3>{{post.title}}</h3>





    <button v-on:click="$emit('enlarge-text')">
    Enlarge text
    </button>


    <div v-html="post.content"></div>
    </div>
    `
});




new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ],
        postFontSize: 1
    },
    methods: {

    },
    computed: {

    }
});
