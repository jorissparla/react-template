var Reflux = require('reflux');
var Api = require('../utils/api');

var Actions = require('../actions');
var _ = require('lodash');

var UserStore = Reflux.createStore({
  listenables: [Actions],
  getUsers: function(){
    return Api.getUsers()
      .then(function(json){
        if (this.users) {
          this.users.push(json);
        } else {
          this.users = json;
        }
        console.log('this.users', this.users, json);
        this.triggerChange();
      }.bind(this));
  },

  triggerChange: function() {
    this.trigger('change', this.users);
  }
});
module.exports=UserStore;
