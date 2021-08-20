import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Store } from 'redux';
import { addAge } from '.';

function App(props: {store:Store<{age:number;}>}) {
  const store = props.store;
  const state = store.getState();
  return (
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
  );
}

export default App;
