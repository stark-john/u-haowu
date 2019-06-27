const reducer = (state={
  bannerlist: [1,2,3],
  imgheight:'2rem',
  bannerIn: 0
},action) => {
  const {type, data} = action;
  switch(type){
    case 'changebannerlist':
      return Object.assign({}, state, {bannerlist: data});
    // case 'changeimgheight':
    //   return Object.assign({},state,{imgheight: data});
    default :
      return state;
    }
}
export default reducer;