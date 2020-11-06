import React, { Component } from "react";
// import {createStore} from 'red'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import "./App.css";
import thunk from 'redux-thunk'

import rootReducer from "../reducers";
import SmurfList from "./SmurfList";
import Form from "./Form";

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends Component {
  render() {

    return (

      <Provider store={store}>
        <div className="App">
          <SmurfList></SmurfList>
          <Form></Form>
        </div>
      </Provider>
    );
  }
}

export default App;
