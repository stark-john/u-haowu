const reducer = (state={loginData:[]}, action) => {
  const { type, data } = action;
  switch(type) {
    case 'changeloginData': return Object.assign({}, state, {loginData: data});
    default: return state;
  }
}

export default reducer;