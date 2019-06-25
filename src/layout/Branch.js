import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Clothes from '@/views/clothes';

const Com = () => (
  <div className="container">
    <Switch>
      <Route path='/branch/clothes' component = { Clothes } />
    </Switch>
  </div>
)

export default Com;