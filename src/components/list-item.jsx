var React = require('react');

var ListItem = React.createClass({

  render: function() {
    return (
      <div className="list-group-item">
        {this.props.car}
      </div>
    );
  }

});

module.exports = ListItem;
