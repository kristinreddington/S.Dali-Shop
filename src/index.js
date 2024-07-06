import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker.ts';
import store from './store.jsx'
import './fonts/junicode-1.002/FoulisGreek.ttf';
import './fonts/junicode-1.002/Junicode-Bold.ttf';
import './fonts/junicode-1.002/Junicode-BoldItalic.ttf';
import './fonts/junicode-1.002/Junicode-Italic.ttf';
import './fonts/junicode-1.002/Junicode.ttf';
import './fonts/murmure/fonts/webfonts/Le_Murmure-Regular_web.ttf'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  );
registerServiceWorker();
