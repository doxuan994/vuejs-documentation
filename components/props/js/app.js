Vue.component('blog-post', {
    props: {
        title: String,
        likes: Number,
        isPublished: Boolean,
        commentIds: Array,
        author: Object,
        callback: Function,
        contactsPromise: Promise
    },
    template: `
        <h3>{{title}}</h3>
    `

});




new Vue({
    el: '#app',
    data: {

    },
    methods: {

    },
    computed: {

    }
});
