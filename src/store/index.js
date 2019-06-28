import { createStore, combineReducers } from 'redux';
import home from '@/views/home/store';
import strategy from '@/views/strategy/store';
import cart from '@/views/cart/store';
import user from '@/views/user/store';
import clothes from '@/views/clothes/store';
import detail from '@/views/detail/store'
const reducer = combineReducers({
  home,
  strategy,
  cart,
  user,
  clothes,
  detail
})

const store = createStore(reducer);

export default store;