import React from 'react';
import Home from '@/views/home';
import Strategy from '@/views/strategy';
import Cart from '@/views/cart';
import User from '@/views/user';
import Footer from '@/components/Footer'
import { Switch, Route, Redirect }  from 'react-router-dom';


const App = () => (
  <div className = "container">
    <Switch>
      <Route path = '/home' component = { Home } />
      <Route path = '/strategy' component = { Strategy } />
      <Route path = '/cart' component = { Cart } />
      <Route path = '/user' component = { User } />
      <Redirect to = '/home'  />
    </Switch>
    <Footer/>
  </div>
)

export default App;