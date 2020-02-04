import React from "react";
//import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );
}

export default App;
