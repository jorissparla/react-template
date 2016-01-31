var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./components/main');
var ListUser = require('./components/user-list');
var UserProfile = require('./components/user-profile');

module.exports = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="list/:id" component={ListUser}/>
      <Route path="userprofile" component={UserProfile}/>

    </Route>
  </Router>
)
