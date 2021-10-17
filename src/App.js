import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//Import the pages that are being used
import {HomeComponent} from "./components/Home/HomeComponent";
import React from "react";

function App() {
  return (
      <Router>
          <Route exact path="/" component={HomeComponent} />
      </Router>
  );
}

export default App;
