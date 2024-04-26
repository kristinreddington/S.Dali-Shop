import {
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import products from './reducers/products'
import productFormData from './reducers/productFormData'
import posts from './reducers/posts'
import registerFormData from './reducers/registerFormData'
import cart from './reducers/cart'
import email from './reducers/email'

const reducer = combineReducers({
  products,
  productFormData,
  posts,
  registerFormData,
  cart,
  email
});

const middleware = [thunk];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const store = configureStore({
  reducer, 
  enhancer
});

export default store;
