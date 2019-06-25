import { connect } from 'react-redux';
import UI from './UI';
import api from '@/api';


const mapStateToProps = (state) => {
  return {
  bannerlist: state.clothes.bannerlist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerListData () {
      // console.log(11111111111111)
      api.requestGetData('/banner.json').then(data => {
        dispatch({
          type: 'changebannerlist',
          data: data.banner
        })
      })
    }
  }
}

const Com = connect(mapStateToProps,mapDispatchToProps)(UI);

export default Com;