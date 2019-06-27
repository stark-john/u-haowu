import { connect } from 'react-redux';
import UI from './UI';
// import api from '@/api';
import axios from 'axios';
import Mock from '@/mock';


const mapStateToProps = (state) => {
  console.log(state.home.nav)
  return {
    bannerIn: state.home.bannerIn,
    bannerlist: state.home.bannerlist,
    navlist: state.home.nav,
    imgheight: state.home.imgheight
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getHomeBannerIn(to){
      dispatch({
        type: 'changeBannerIn',
        data: to
      })
    },
    // scrollEvent(){
    //   if(window.pageoffsetY>=2rem){

    //   }
    // }
    getHomeBannerListData(){
      axios.get('http://localhost:3000/banner.json').then(res=>{
        // console.log(JSON.stringify(res.data.banner))
        dispatch({
          type: "changeBannerList",
          data: res.data.banner
        })
      })
    },
    getHomeGoodsListData(){
      axios.get('http://wangchengye.com/goodslist').then(res=>{
        console.log(res.data)
        dispatch({
          type:"changehomegoodslist",
          data:res.data
        })
      })
    },
    getHomeNavListData(){
      // api.requestGetData('/banner.json').then(data=>{
      //   console.log(data)
      //   dispatch({
      //     type: "changenavlist",
      //     data: JSON.parse(JSON.stringify(data.nav))
      //   })
      // })
      axios.get('http://localhost:3000/banner.json').then(res=>{
        console.log(JSON.stringify(res.data.nav[0].src))
        dispatch({
          type: "changenavlist",
          data: JSON.parse(JSON.stringify(res.data.nav))
        })
      })
    }
  }
}




const Com = connect(mapStateToProps,mapDispatchToProps)(UI);
export default Com;