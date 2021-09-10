//shalice branch test
//shalice test 2

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddRestaurant from "./components/add-restaurant.component";
import EditRest from "./components/edit-rest.component";
import RestList from "./components/rest-list.component";
import RestMenu from "./components/menu-rest.component";
import RestDir from "./components/rest-dir.component";
import logo from "./SMALL-EATS-LLC-ALT-TRANSPsnip.png";

//var restmenu = require('./rest.model.js');

class App extends Component {
  render() {
    return (
      <Router>
        
        <div className="container" >
          
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="https://github.com/McKenna242/SmallEats_Mern/tree/master/mern-smalleats-app" target="_blank">
              <img src={logo} width="250" height="75" alt="github" />
            </a>
            <Link to="/" className="navbar-brand">MERN Local Restaurant Tracker</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Restaurants</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/add" className="nav-link">Add Restaurant</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={RestList} />
          <Route path="/edit/:id" component={EditRest} />
          <Route path="/add" component={AddRestaurant} />
          <Route path="/menu/:id" component={RestMenu} />
          <Route path="/dir/:id" component={RestDir} />
        </div>
      </Router>
    );
  }
}

export default App;