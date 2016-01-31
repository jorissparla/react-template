var React = require('react');

var ListItemUser = React.createClass({

  render: function() {
    return (
      <div className="list-group-item">
        {this.props.user}
      </div>
    );
  }

});

module.exports = ListItemUser;
