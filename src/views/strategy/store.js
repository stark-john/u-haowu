const reducer = (state={strategyData:[]}, action) => {
  const { type, data } = action;
  switch(type) {
    case 'changehomeData': return Object.assign({}, state, {strategyData: data});
    default: return state;
  }
}

export default reducer;