import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import ContactUs from './component/ContactUs';
import AboutUs from './component/AboutUs';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function AppRouter() {
  return (
    <Router>
      
      <div>
        <Header />
        <Switch>
          <Route path="/" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
