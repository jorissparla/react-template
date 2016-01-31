var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var MenuItems = [{id:1, "name": "Orders"}, {id:2, "name": "Products"}, {id:3, "name": "Users"}]

module.exports = React.createClass({
  getInitialState: function() {
    return {
      menuitems: MenuItems
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
        </ul>
      </div>
    </nav>
  },
  renderMenuItems: function(){
    return this.state.menuitems.slice(0,4).map(function(menuitem) {
      return <li key={menuitem.id}>
        <Link activeClassName ="active" to={"#/"+menuitem.id}>
          {menuitem.name}
        </Link>

      </li>
    });
  }
});
