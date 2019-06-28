const reducer = (state={cartData:[],goodsimglist:[]}, action) => {
  const { type, data } = action;
  switch(type) {
    case 'changegoodsimglist': return Object.assign({}, state, {goodsimglist: data})
    case 'changehomeData': return Object.assign({}, state, {cartData: data});
    default: return state;
  }
}

export default reducer;