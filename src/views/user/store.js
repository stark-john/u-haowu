const reducer = (state={
  userData:[]
}, action) => {
  const { type, data } = action;
  switch(type) {
    case 'changeuserData': return Object.assign({}, state, {userData: data});
    default: return state;
  }
}

export default reducer;