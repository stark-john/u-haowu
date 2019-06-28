import { connect } from 'react-redux';
import UI from './UI';
import axios from 'axios';
const mapStateToProps = (state)=>{
return {
  goodsimglist: state.detail.goodsimglist
}
}
const mapDispatchToProps = (dispatch)=>{
  return {
    getGoodsImgList () {
      axios.get('http://www.wangchengye.com/imglist').then(res=>{
        console.log(res.data)
        dispatch({
          type: 'changegoodsimglist',
          data:res.data
        })
      })
    }
  }
}
const Com = connect(mapStateToProps,mapDispatchToProps)(UI);

export default Com;