//Libs
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
//Components
import App from './App';
//Store
import store from './Store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
