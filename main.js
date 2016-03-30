var v = new Vue({
    el: '#app',
    data:{
        debug: true,
        static: null,
        user_data: [],
        active_page: "bundles",
        active_room: 0,
        active_bundle: 0,
        active_season: "spring",
        active_skill: "farming",
        save_mode: false,
        load_mode: false
    },
    ready: function(){
        this.fetchData();
        new Clipboard('.copy');
        storedUserData = localStorage.getItem('user_data');
        if(storedUserData !== null){
            this.loadData(storedUserData);
        }
    },
    computed: {
       user_data_serialized: function(){
           return JSON.stringify(this.user_data);
       }
    },
    methods: {
        fetchData: function(){
            this.$http.get('bundles.json', function(data, status, response){
                if(status == 200){
                    this.static = data;
                    if(this.user_data.length <= 0){
                        for(i=0; i<this.static.bundles.length;i++){
                            this.user_data.push([]);
                        }
                    }
                }
            });
        },
        enterLoadMode: function(){
            this.load_mode = true;
        },
        exitLoadMode: function(){
            this.load_mode = false;
        },
        loadData: function(data){
            this.user_data = JSON.parse(data);
            this.exitLoadMode();
        },
        enterSaveMode: function(){
            this.save_mode = true;
            localStorage.setItem('user_data', this.user_data_serialized);
        },
        exitSaveMode: function(){
            this.save_mode = false;
        },
        change_page: function(new_page){
          this.active_page = new_page;
        },
        change_bundle: function(new_bundle){
            this.active_bundle = new_bundle;
        },
        change_room: function(new_room){
            this.active_room = new_room;
        },
        change_season: function(new_season){
            this.active_season = new_season;
        },
        change_skill: function(new_skill){
            this.active_skill = new_skill;
        },
        addItemToBundle: function(bundleId, itemId){
            this.user_data[bundleId].push(itemId);
        },
        removeItemFromBundle: function(bundleId, itemId){
            i = this.user_data[bundleId].indexOf(itemId);
            this.user_data[bundleId].splice(i, 1);
        },
        toggleItemInBundle: function(bundleId, itemId){
            if(this.isItemInBundle(bundleId, itemId)){
                this.removeItemFromBundle(bundleId, itemId);
            }
            else{
                this.addItemToBundle(bundleId, itemId);
            }
        },
        isItemInBundle: function(bundleId, itemId){
            if(this.user_data[bundleId].indexOf(itemId) > -1){
                return true;
            }
            else{
                return false;
            }
        },
        getSeasonName: function(seasonId){
            for(i = 0; i < this.static.seasons.length; i++){
                if(this.static.seasons[i].id === seasonId){
                    return this.static.seasons[i].name;
                }
            }
            return "";
        },
        getSkillName: function(skillId){
            for(i = 0; i < this.static.skills.length; i++){
                if(this.static.skills[i].id === skillId){
                    return this.static.skills[i].name;
                }
            }
            return "";
        }
    }
});

Vue.filter('inBundle', function(value, id){
    return value.filter(function(element){
        if(element.bundles.indexOf(id) > -1){
            return true;
        }
        else{
            return false;
        }
    });
});

Vue.filter('filterByArray', function(array1, array2){
    return array1.filter(function(element){
        if(array2.indexOf(element.id) > -1){
            return true;
        }
        else{
            return false;
        }
    });
});
