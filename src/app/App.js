import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/Home/index'
import Topic from '../pages/Topic/index'

const App = () => (
  <Router >
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/topic/:topicId" component={() => <Topic />} />
    </Switch>
  </Router>
)

export default App;
