import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'; 
import AppReducer from './AppReducer';

const store = createStore(AppReducer);

const fnRender = () => {
    ReactDOM.render(
    <App
        msg={ store.getState() }
        sayHello={ () => store.dispatch({ type: 'SAY_HELLO' })}>
    </App>, 
    document.getElementById('root')
)}

fnRender();
store.subscribe(fnRender); 

registerServiceWorker();
