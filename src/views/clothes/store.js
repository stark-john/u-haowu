const reducer = (state={
  bannerlist: [1,2,3]
},action) => {
  const {type, data} = action;
  switch(type){
    case 'changebannerlist':
      return Object.assign({}, state, {bannerlist: data});
    default :
      return state;
    }
}
export default reducer;