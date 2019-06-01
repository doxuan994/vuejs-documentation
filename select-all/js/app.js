let app = new Vue({
    el: '#app',
    data: {
        users: [
            { "id": "0", "name": "Shad" },
            { "id": "1", "name": "Duane" },
            { "id": "2", "name": "Myah" },
            { "id": "3", "name": "Kamron" },
            { "id": "4", "name": "Brendon" }
        ],
        selected: [],
        allSelected: false,
        userIds: []
    },
    methods: {
        selectAll: function() {
            this.userIds = [];

            if (this.allSelected) {
                for (user in this.users) {
                    this.userIds.push(this.users[user].id.toString());
                }
            }
        },
        select: function() {
            this.allSelected = false;
        },
        selectOption: function(event) {
            if (event.target.value == 'Any') {
            
            }
        }
    },
    computed: {

    }
});
