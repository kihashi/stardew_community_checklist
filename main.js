var v = new Vue({
    el: '#app',
    data:{
        debug: true,
        static: null,
        user_data: []
    },
    ready: function(){
        this.fetchData();
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
                }
            });
        }
    }
});
