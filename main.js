var v = new Vue({
    el: '#app',
    data:{
        debug: true,
        static: null,
        user_data: [],
        btnChecked: 'btn-success',
        btnUnchecked: 'btn-warning',
        boxChecked: 'glyphicon-check',
        boxUnchecked: 'glyphicon-unchecked'
    },
    created: function(){
        this.fetchData();
    },
    ready: function(){
        $('.list-group-item').on('click', function() {
            $('.glyphicon', this)
            .toggleClass('glyphicon-chevron-right')
            .toggleClass('glyphicon-chevron-down');
        });
    },
    methods: {
        fetchData: function(){
            this.$http.get('bundles.json', function(data, status, response){
                if(status == 200){
                    this.static = data;
                    for(var i = 0; i < this.static.items.length; i++){
                        this.user_data.push(false);
                    }
                }
            });
        },
        completeItem: function(itemId){
            this.user_data.$set(itemId, !this.user_data[itemId]);
        }
    }
});
