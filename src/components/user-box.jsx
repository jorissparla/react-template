var React = require('react');
var UserBox = React.createClass({

  render: function() {
    return (
        <li><a className="navbar-brand" href="#/userprofile">
        <i className="fa fa-user"></i>
        <strong>Joris Sparla</strong>
        </a></li>
    );
  }

});

module.exports = UserBox;
