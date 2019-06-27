const reducer = (state={
  bannerIn: 0,
  bannerlist:[1,2],
  nav: [],
  imgheight: '1.5rem',
  goodslist:[]
}, action) => {
  const { type, data } = action;
  // console.log(goodslist)
  switch(type) {
    case 'changeBannerList': return Object.assign({}, state, {bannerlist: data});
    case 'changeBannerIn': return Object.assign({}, state, {bannerIn: data});
    case 'changenavlist': return Object.assign({}, state, {nav: data});
    case 'changehomegoodslist': return Object.assign({}, state, {goodslist: data});
    default: return state;
  }
}

export default reducer;