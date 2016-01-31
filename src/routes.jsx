var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./components/main');
var List = require('./components/list');

module.exports = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="list/:id" component={List}/>

    </Route>
  </Router>
)
