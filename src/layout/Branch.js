import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Clothes from '@/views/clothes';
import Detail from '@/views/detail';
import Online from '@/views/online';

const Com = () => (
  <div className="container">
    <Switch>
      <Route path = '/branch/user/online' component = { Online } />
      <Route path='/branch/clothes' component = { Clothes } />
      <Route path='/branch/detail' component = { Detail } />
    </Switch>
  </div>
)

export default Com;