import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker.ts';
import store from './store.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  );
registerServiceWorker();
