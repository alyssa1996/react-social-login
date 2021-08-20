import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './router';
import { createStore, Store } from 'redux';
import App from './App';

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

  ReactDOM.render(
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
