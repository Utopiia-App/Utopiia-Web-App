import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WhoWeNeedPage from './pages/whoweneed';
import AboutPage from './pages/about';
import ApplyPage from './pages/apply';
import ContactPage from './pages/contact';
import IndexPage from './pages';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/whoweneed" component={WhoWeNeedPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/apply" component={ApplyPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/" component={IndexPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
