var React = require('react');
var ListItemUser = require('./list-item-user');
var Api = require('../utils/api');

var cars = [{"id":1, "name":"BMW" }, {"id":2, "name":"Mercedes-Benz" }, {"id":3, "name":"Volkswagen" }]

var UserList = React.createClass({
  getInitialState: function() {
    Api.getUsers()
    .then (function(data) {
      console.log(data);
      this.setState({users:data});
      console.log(this.users);
    }.bind(this));
    return {
      users: []
    }
  },
  render: function() {
    return (<div className="list-group">
      {this.renderUsers()}
    </div>
    );
  },
  renderUsers: function () {
    return this.state.users.map(function(user){
      return   <ListItemUser key={user.id} user={user.name}></ListItemUser>
    })
  }

});

module.exports = UserList;
