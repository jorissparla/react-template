var React = require('react');
var ListItemUser = require('./list-item-user');
var Api = require('../utils/api');
var UserStore = require('../stores/user-store');
var Actions = require('../actions');
var Reflux = require('reflux');


var UserList = React.createClass({
  mixins: [
  Reflux.listenTo(UserStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      users: []
    }
  },
  componentWillMount: function() {
    Actions.getUsers();
    console.log('componentWillMount');
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="list-group">
            {this.renderUsers()}
          </div>
        </div>
      </div>
    );
  },
  renderUsers: function () {
    console.log('render', JSON.stringify(this.state.users[0]));

    return this.state.users.map(function(user){
      return   <ListItemUser key={user.id} {...user} ></ListItemUser>
    });
  },
  onChange: function (event, users) {
    console.log('onChange', users);
    this.setState({users: users});

  }

});

module.exports = UserList;
