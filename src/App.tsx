import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Store, Unsubscribe } from 'redux';
import { addAge } from '.';
import * as PropTypes from 'prop-types';

class App extends React.Component<{}, {}> {

  public static contextTypes = {
    store: PropTypes.object
  };

  //private _unsubscribe:Unsubscribe;

  componentDidMount(){
    const store = this.context.store;
    store.subscribe(()=>{
      this.forceUpdate();
    });
  }
  componentWillUnmount(){
    //this._unsubscribe();
  }
  render(){
    const store = this.context.store;
    const state = store.getState();
    return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {state.age}
         <button onClick={()=>{
           store.dispatch(addAge());
         }}> 한해가 지났다</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  };
}

export default App;
