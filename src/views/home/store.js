const reducer = (state={
  bannerlist:[1,2],
  nav: [],
}, action) => {
  const { type, data } = action;
  switch(type) {
    case 'changeBannerList': return Object.assign({}, state, {bannerlist: data});
    case 'changenavlist': return Object.assign({}, state, {nav: data})
    default: return state;
  }
  // console.log(state)
}

export default reducer;