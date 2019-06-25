import { createStore, combineReducers } from 'redux';
import home from '@/views/home/store';
import strategy from '@/views/strategy/store';
import cart from '@/views/cart/store';
import user from '@/views/user/store';
import login from '@/views/login/store';

const reducer = combineReducers({
  home,
  strategy,
  cart,
  user,
  login
})

const store = createStore(reducer);

export default store;