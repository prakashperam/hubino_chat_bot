// import dependencies 

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers'

//connect application to redux dev tools

import {composeWithDevTools, connectWithDevTools} from 'redux-devtools-extension'

// set up intial state

const initialState = {}


//import middleware 
const middleware = [thunk]

// set up store

const store = createStore(combineReducers, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );

// export store

export default store

