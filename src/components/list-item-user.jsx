var React = require('react');

var ListItemUser = React.createClass({

  render: function() {
    return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-4">
            <img className="float_left" type="square" height="90" width="90" src= {this.imagelink()}/>
          </div>
          <div className="col-md-8">
            <h4>{this.props.name}</h4>
            <p>
              {this.props.about}
            </p>
          </div>
        </div>
      </div>

    );
  },
  imagelink: function() {
    return "http://api.randomuser.me/portraits/men/"+this.props.id+".jpg"
  }

});

module.exports = ListItemUser;
