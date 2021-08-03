import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigate from "./Views/Navigate.js";
import Login from "./Views/Login.js";
import Create from "./Views/Create.js";
import Map from "./Views/Map.js";

function App() {



  return (
   
   <div className="App">
      <Router>
        <Navigate />
        <Switch>
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/create" exact component={() => <Create />} />
          <Route path="/map" exact component={() => <Map />} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
