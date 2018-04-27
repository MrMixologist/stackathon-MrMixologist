import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// import various store components
import ingredient from './ingredient';
import singleCocktail from './singleCocktail';

const reducer = combineReducers({ ingredient, singleCocktail });
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
));
const store = createStore(reducer, middleware);

export default store;
export * from './ingredient';
export * from './singleCocktail';
