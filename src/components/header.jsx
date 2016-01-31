var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Api = require('../utils/api');
var UserBox = require('./user-box');

//var MenuItems = [{id:1, "name": "Orders"}, {id:2, "name": "Products"}, {id:3, "name": "Users"}]

module.exports = React.createClass({
  getInitialState: function() {
    Api.getMenuItems()
    .then (function(data) {
      this.setState({menuitems:data});
      console.log(this.menuitems);
    }.bind(this));
    return {
      menuitems: []
    }
  },
  componentWillMount: function(){
  },
  render: function() {
    return <nav className="navbar navbar-default header">
      <div className="container-fluid">
        <Link to="/#" className="navbar-brand">
          My Browser
        </Link>
        <ul className="nav navbar-nav navbar-right">
          {this.renderMenuItems()}
          <UserBox/>
        </ul>
      </div>
    </nav>
  },
  renderMenuItems: function(){
    return this.state.menuitems.map(function(menuitem) {
      return <li key={menuitem.id}>
        <Link activeClassName ="active" to={"#/"+menuitem.id}>
          {menuitem.name}
        </Link>

      </li>
    });
  }
});
