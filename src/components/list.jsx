var React = require('react');
var ListItem = require('./list-item.jsx');

var cars = [{"id":1, "name":"BMW" }, {"id":2, "name":"Mercedes-Benz" }, {"id":3, "name":"Volkswagen" }]

var List = React.createClass({

  render: function() {
    return (<div className="list-group">
      {this.renderListItems()}
    </div>
    );
  },
  renderListItems: function () {
    return cars.map(function(car){
      return   <ListItem key={car.id} car={car.name}></ListItem>
    })
  }

});

module.exports = List;
