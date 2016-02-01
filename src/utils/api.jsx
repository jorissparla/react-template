var Fetch = require('whatwg-fetch');
var menuItems = 'assets/menuitems.json';
var Users = 'assets/users.json';


module.exports = {
  getMenuItems: function() {
    return fetch(menuItems)
    .then(function(response) {
      return response.json()

    })
  },
  getUsers: function() {
    return fetch(Users)
    .then(function(response) {
      return response.json()

    })
  },
  getUser: function(id) {
    
  }
};
