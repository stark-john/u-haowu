const reducer = (state={
  bannerIn: 0,
  bannerlist:[1,2],
  nav: [],
  imgheight: '1.5rem'
}, action) => {
  const { type, data } = action;
  switch(type) {
    case 'changeBannerList': return Object.assign({}, state, {bannerlist: data});
    case 'changeBannerIn': return Object.assign({}, state, {bannerIn: data});
    case 'changenavlist': return Object.assign({}, state, {nav: data})
    default: return state;
  }
  // console.log(state)
}

export default reducer;