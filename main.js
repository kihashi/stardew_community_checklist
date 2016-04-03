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
        if(storedUserData !== null && storedUserData !== ""){
            this.loadData(storedUserData);
        }
    },
    computed: {
       user_data_serialized: function(){
           return btoa(JSON.stringify(this.user_data));
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
            this.user_data = JSON.parse(atob(data));
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
        addItemToBundle: function(bundleId, itemId, itemPosition){
            this.user_data[bundleId].push({item: itemId, position: itemPosition});
        },
        removeItemFromBundle: function(bundleId, itemId, itemPosition){
            console.log("Removing item from bundle" + bundleId + " | " + itemId + " | " + itemPosition);
            for(i = 0; i < this.user_data[bundleId].length; i++){
                if(this.user_data[bundleId][i].item === itemId && this.user_data[bundleId][i].position === itemPosition){
                    console.log("Found a match with: ");
                    console.log(this.user_data[bundleId][i]);
                    this.user_data[bundleId].splice(i, 1);
                }
            }
        },
        toggleItemInBundle: function(bundleId, itemId, itemPosition){
            if(this.isItemInBundle(bundleId, itemId, itemPosition)){
                this.removeItemFromBundle(bundleId, itemId, itemPosition);
            }
            else{
                this.addItemToBundle(bundleId, itemId, itemPosition);
            }
        },
        isItemInBundle: function(bundleId, itemId, itemPosition){
            if(this.user_data[bundleId].filter(function(element){
                    return element.item === itemId && element.position === itemPosition;
                }).length > 0){
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
        },
        getRoomItemsRequired: function(roomId) {
            return this.static.bundles.reduce(function(previousValue, nextValue){
                if(nextValue.room === roomId){
                    return previousValue + nextValue.items_required;
                }
                else{
                    return previousValue;
                }
            }, 0)
        },
        getRoomItemsChecked: function(roomId){
            return this.static.bundles
                .filter(function(b){ return b.room === roomId; })
                .map(function(b){ return b.id; })
                .reduce(function(p, c){ return p + v.user_data[c].length; }, 0);
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
