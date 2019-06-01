let app = new Vue({
    el: '#app',
    data: {
        selected: ['A', 'B', 'C'],
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' },
            { text: 'Any', value: ['A', 'B', 'C'] },
        ]
    },
    methods: {
        getData: function(event) {
            let selectedValue = event.target.value;
            if (selectedValue.length > 1) {
                let extractValues = selectedValue.split(',');
                for (let i = 0; i < extractValues.length; i++) {
                    console.log(extractValues[i]);
                }
            } else {
                console.log(event.target.value);
            }

        }
    }
});
