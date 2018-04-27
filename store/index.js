import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// import various store components
import ingredients from './ingredients';
import cocktails from './cocktails';

const reducer = combineReducers({ ingredients, cocktails });
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true, logging: false})
));
const store = createStore(reducer, middleware);

export default store;
export * from './ingredients';
export * from './cocktails';
