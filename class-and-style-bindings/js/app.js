Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
});



let app = new Vue({
    el: '#app',
    data: {
        isActive: true,
        error: null,
        activeClass: 'active',
        errorClass: 'text-danger',
        activeColor: 'gold',
        fontSize: 30,
        styleObject: {
            color: '#21ce99',
            fontSize: '13px'
        },
        baseStyles: {
            color: '#21ce99',
            fontSize: '13px'
        },
        overridingStyles: {
            color: 'salmon',
            fontSize: '50px'
        }
    },
    methods: {
        // changeStatus: function() {
        //     if (this.isActive == true) {
        //         this.isActive = false;
        //     } else {
        //         this.isActive = true;
        //     }
        // }
    },
    computed: {
        classObject: function() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
});
