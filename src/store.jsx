import {
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import products from './reducers/products.ts'
import productFormData from './reducers/productFormData.ts'
import posts from './reducers/posts.ts'
import registerFormData from './reducers/registerFormData.ts'
import cart from './reducers/cart.ts'
import email from './reducers/email.ts'

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
