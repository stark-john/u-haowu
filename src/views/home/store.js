const reducer = (state={homeData:[]}, action) => {
  const { type, data } = action;
  switch(type) {
    case 'changehomeData': return Object.assign({}, state, {homeData: data});
    default: return state;
  }
}

export default reducer;