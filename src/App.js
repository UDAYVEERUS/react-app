import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Contact from './component/Contact';
import AboutUs from './component/AboutUs';
function AppRouter() {
  return (
    <Router>
      
      <div>
        {/* <Header />
        <Switch>
          <Route path="/" component={AboutUs} />
          <Route path="/contact" component={Contact} />
        </Switch> */}
        <Contact />
      </div>

    </Router>
  );
}

export default AppRouter;
