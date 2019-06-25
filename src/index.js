import React from 'react';
import ReactDOM from 'react-dom';
import App from './layout/App';
import Other from './layout/Other';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Switch, Route }  from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import '@/style/main.scss';

ReactDOM.render(
<Provider store = { store }>
  <HashRouter>
    <Switch>
      <Route path = '/other' component = { Other } />
      <Route path = '/' component = { App } />
    </Switch>
  </HashRouter>
</Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
