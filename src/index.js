import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import { battleshippReducer} from './reducers/battleshipReducer';
import { namePlayerReducer } from './reducers/namePlayerReducer';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const reducers = combineReducers({
  stateGame: battleshippReducer,
  namePlayer: namePlayerReducer
})
const store = createStore(reducers);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
