const reducer = (state={cartData:[]}, action) => {
  const { type, data } = action;
  switch(type) {
    case 'changehomeData': return Object.assign({}, state, {cartData: data});
    default: return state;
  }
}

export default reducer;