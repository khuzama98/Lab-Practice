import React from "react";
import List from "./components/28-04-19";
import Api from "./components/02-05-19";
import Countries from "./components/05-05-19";
import "./App.css";
import logo from "./logo.svg";
import store from "./store/16-5-19";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Countries />
        </header>
      </div>
    </Provider>
  );
};

export default App;
