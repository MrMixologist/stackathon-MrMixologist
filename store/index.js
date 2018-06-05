import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import various store components
import ingredients from './ingredients';
import cocktails from './cocktails';
import cocktailMatches from './cocktailMatches';
import currentUser from './auth';

const reducer = combineReducers({
  ingredients,
  cocktails,
  cocktailMatches,
  currentUser
});
const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware
    // createLogger({collapsed: true})
  )
);
const store = createStore(reducer, middleware);

export default store;
export * from './ingredients';
export * from './cocktails';
export * from './cocktailMatches';
export * from './auth';
