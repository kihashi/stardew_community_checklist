var v = new Vue({
    el: '#app',
    data:{
        changelog: null,
        static: null,
        user_data: [],
        search_term: "",
        enteredData: "",
        active_page: "bundles",
        active_room: 0,
        active_bundle: 0,
        active_season: "spring",
        active_skill: "farming",
        save_mode: false,
        load_mode: false,
        pick_spoilers: false,
        hideCompleted: false,
        hideSpoilers: false,
        spoilers: {
            bundle_rewards: true,
            item_source: true,
            item_seasons: true,
            item_skills: true
        },
        temp_spoilers: {}

    },
    beforeMount: function(){
        this.fetchData();
        this.fetchChangeLog();
        new Clipboard('.copy');
        storedUserData = localStorage.getItem('user_data');
        if(storedUserData !== null && storedUserData !== ""){
            this.loadData(storedUserData);
        }
        spoilers = localStorage.getItem('spoilers');
        if(spoilers !== null && spoilers !== ""){
            this.spoilers = JSON.parse(spoilers);
        }
        hideCompleted = localStorage.getItem('hideCompleted');
        if(hideCompleted !== null && hideCompleted !== ""){
            this.hideCompleted = JSON.parse(hideCompleted);
        }
        hideSpoilers = localStorage.getItem('hideSpoilers');
        if(hideSpoilers !== null && hideSpoilers !== ""){
            this.hideSpoilers = JSON.parse(hideSpoilers);
        }
    },
    computed: {
       user_data_serialized: function(){
           return btoa(JSON.stringify(this.user_data));
       },
        active_room_bundles: function(){
           var self = this;
           return this.static.bundles.filter(function(bundle){ return bundle.room === self.active_room });
        },
        active_bundle_items: function(){
            var self = this;
            return this.static.items.filter(function(item){ return item.bundles.indexOf(self.active_bundle) > -1});
        },
        filtered_items: function(){
            var self = this;
            return _.orderBy(self.static.items.filter(function(item){ return item.name.toLowerCase().indexOf(self.search_term.toLowerCase()) !== -1 }), 'name');
        }
    },
    methods: {
        fetchData: function(){
            this.$http.get('bundles.json').then(function(response) {
                this.static = response.body;
                if(this.user_data.length <= 0){
                    for(i=0; i<this.static.bundles.length;i++){
                        this.user_data.push([]);
                    }
                };
            }, function(response) {
                console.log("error fetching bundle data");
            });

        },
        fetchChangeLog: function() {
            this.$http.get('changelog.json').then(function(response) {
                    this.changelog = response.body.versions;
            }, function(response) {
                console.log("error fetching change log data");
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
        enterSpoilerSettings: function(){
            this.temp_spoilers = JSON.parse(JSON.stringify(this.spoilers));
            this.pick_spoilers = true;
        },
        saveSpoilerSettings: function(){
            this.spoilers = JSON.parse(JSON.stringify(this.temp_spoilers));
            localStorage.setItem('spoilers', JSON.stringify(this.spoilers));
            this.exitSpoilerSettings();
        },
        exitSpoilerSettings: function(){
            this.pick_spoilers = false
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
        toggleHideCompleted: function(){
            this.hideCompleted = !this.hideCompleted;
            localStorage.setItem('hideCompleted', JSON.stringify(this.hideCompleted));
        },
        toggleHideSpoilers: function(){
            this.hideSpoilers = !this.hideSpoilers;
            localStorage.setItem('hideSpoilers', JSON.stringify(this.hideSpoilers));
        },
        addItemToBundle: function(bundleId, itemId, itemPosition){
            this.user_data[bundleId].push({item: itemId, position: itemPosition});
        },
        removeItemFromBundle: function(bundleId, itemId, itemPosition){
            for(i = 0; i < this.user_data[bundleId].length; i++){
                if(this.user_data[bundleId][i].item === itemId && this.user_data[bundleId][i].position === itemPosition){
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
            localStorage.setItem('user_data', this.user_data_serialized);
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
            var self = this;
            return this.static.bundles
                .filter(function(b){ return b.room === roomId; })
                .reduce(function(p, c){ return p + Math.min(self.user_data[c.id].length, c.items_required); }, 0);
        },
        isCompleted: function (item) {
            for(i=0; i < item.bundles.length; i++){
                if(!(this.isItemInBundle(item.bundles[i], item.id, i) || this.isBundleComplete(item.bundles[i]))){
                    return false;
                }
            }

            return true;
        },
        isBundleComplete: function(bundle_id){
            return this.user_data[bundle_id].length >= this.static.bundles[bundle_id].items_required;
        },
        getItemSeasons: function(item){
            return this.static.seasons.filter(function(season){ return item.seasons.indexOf(season.id) > -1 });
        },
        getItemSkills: function(item){
            return this.static.skills.filter(function(skill){ return item.skills.indexOf(skill.id) > -1 });
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

Vue.filter('seasonFilter', function(items, season_id){
   return items.filter(function(element){
       if(season_id == "allseasons" && element.seasons.length > 3){
           return true;
       }
       else if(element.seasons.length < 4 && element.seasons.indexOf(season_id) > -1){
           return true;
       }
       else{
           return false;
       }
   });
});
