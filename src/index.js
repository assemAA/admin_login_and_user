import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers} from 'redux';
import usersReducer from './dataStore/usersReducer.js';
import tokenReducer from './dataStore/tokenReducer' ;
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import EmployessReducer from './dataStore/EmployeesReducer.js';


localStorage.removeItem('userName');
localStorage.removeItem('signUpUserName') ;
localStorage.removeItem('signUpPassword') ;

var rootReducers = combineReducers( {
  tokenAndEmailReducer  : tokenReducer ,
  dataUsersReducer : usersReducer ,
  employeesReducerData : EmployessReducer ,
})


const store = createStore(rootReducers);
ReactDOM.render(
  <BrowserRouter>
  <Provider  store = {store}>  
    <App />
    </Provider>
    </BrowserRouter>
    
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
