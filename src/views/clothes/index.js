import { connect } from 'react-redux';
import UI from './UI';
import api from '@/api';


const mapStateToProps = (state) => {
  return {
  bannerIn: state.home.bannerIn,
  bannerlist: state.clothes.bannerlist,
  imgheight: state.clothes.imgheight
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log(this.imgheight)
  return {
    getBannerListData () {
      // console.log(11111111111111)
      api.requestGetData('/banner.json').then(data => {
        dispatch({
          type: 'changebannerlist',
          data: data.banner
        })
      })
    },
    getHomeBannerIn(to){
      dispatch({
        type: 'changeBannerIn',
        data: to
      })
    },
    // getImgHeightData () {
    //   dispatch({
    //     type: 'changimgheight',
    //     // data: state.imgHeight
    //   })
    // }
  }
}

const Com = connect(mapStateToProps,mapDispatchToProps)(UI);

export default Com;