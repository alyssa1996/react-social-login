import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './router';
import { createStore, Store } from 'redux';
import App from './App';
import * as PropTypes from 'prop-types';

//* ACTION TYPE 지정
const ADD_AGE = 'ADD_AGE';

//* 액션을 생성하는 함수
export function addAge(){
    return(
        {
            type: ADD_AGE
        }
    )
}

//* REDUCER함수 만들기
function ageApp(state:{age : number;}={age: 0}, action:{type: 'ADD_AGE'}){
    if(action.type === ADD_AGE){
      return{
        age: state.age+1
      }
    }
    return state

}

const store: Store<{age:number;}> = createStore(ageApp);

class Provider extends React.Component<{store: Store<{age: number;}>}>{
  static childContextTypes = {
    store: PropTypes.object
  };
  getChildContext(){
    return{
      store: this.props.store
    };
  }
  render(){
    return this.props.children as JSX.Element;
  }
}

  ReactDOM.render(
    <React.StrictMode>
      <Provider store = {store}>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
