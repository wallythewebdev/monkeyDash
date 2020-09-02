import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/header' 
import Nav from './components/Nav'

//   import the components to be loaded in route

import Overview from './components/overview/Dash_overview'
import Details from './components/analytics/Dash_details'


let companyData = require('./assets/data/data.json') // << pre rendered company data in JSON format 

/* DATA FORMAT
APRIL: 35
COMPANY: "Walmart"
FEBUARY: 34
FEBUARY_1: 9
HEADQUARTERS: "Bentonville, AR"
JANUARY: 22.6
MARCH: 23.4
MAY: 21.1
TOTAL (BILLIONS): 145.1
*/ 

console.log(companyData)

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App_container">
          <Nav />
          <div className="content">
            <Header />
            <Route exact path='/' component={Overview}/>
            <Route path='/overview' component={Overview}/>
            <Route path='/details' component={Details}/>
          </div>
        </div>
      </Router>
    );
  }
 
}

export default App;
