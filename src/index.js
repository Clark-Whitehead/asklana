import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';

import { store } from './app/store.js';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />
  </React.StrictMode>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)

