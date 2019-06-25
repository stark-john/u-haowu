import { connect } from 'react-redux';
import UI from './UI';
// import api from '@/api';
import axios from 'axios';


const mapStateToProps = (state) => {
  console.log(state.home.nav)
  return {
    bannerlist: state.home.bannerlist,
    navlist: state.home.nav
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getHomeBannerListData(){
      axios.get('http://localhost:3000/banner.json').then(res=>{
        // console.log(JSON.stringify(res.data.banner))
        dispatch({
          type: "changeBannerList",
          data: res.data.banner
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