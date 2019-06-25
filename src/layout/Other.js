import React from 'react';
import Login from '@/views/login';
import { Switch, Route } from 'react-router-dom';

const Com = () => (
  <div className = "container">
    <Switch>
      <Route path = '/other/login' component = { Login } />
    </Switch>
  </div>
)

export default Com;