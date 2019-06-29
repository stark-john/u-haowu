import React from 'react';
import '@/style/detail.scss';
import Buy from '@/components/Buy.js';
import { TransitionGroup  } from 'react-transition-group';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isShow: false,
      buyName: 'buysomething-hide',
    }
  }

  toBuy () {
    this.setState({
      buyName: 'buysomething-show'
    })
    console.log(this.state.isShow)
  }
  goBack (){
    this.props.history.go(-1)
  }
  Event (e) {
    if (e.target.className === 'iconfont icon-cuowu') {
      this.setState({
        buyName: 'buysomething-hide'
      })
    } else if(e.target.className === 'd-confirm') {
      this.setState({
        buyName: 'buysomething-hide'
      })
      this.refs.joinsuccess.style.display = 'block';
      setTimeout(()=>{
        this.refs.joinsuccess.style.display = 'none';
      },1200)
    }
  }

  componentDidMount(){
    this.props.getGoodsImgList()
    console.log(this.props.goodsimglist+"出来了")
  }
  render () {
    return (
      <div className="box" onClick = { this.Event.bind(this) }>
        <header className="d-header">
          <i className="iconfont icon-zuo" onClick={this.goBack.bind(this)}></i>
        </header>
        <div className="d-content">
        <img className="mainimg" src={require('@/images/detail/goodsdetail.png')} alt="goodsdetail" />
        <div className="probox">
          <div className="d-price">
            <span className="d-price-n">$ 199</span>
            <span className="d-price-o">$ 350</span>
          </div>
          <h3 className="d-title"> 【刺绣款】Champion 冠军 男女经典情侣款基础胸前     草写logo圆领短袖T恤 美码偏大一码T1919G </h3>
          <h4 className = "d-describe">以推崇积极进取、健康科学的运动生活为品牌宗旨的Champion，凭借着勇于 开拓的创新精神和出色的产品，在运动服装领域始终保持</h4>
        </div>
      <ul className="d-choosebox">
        <li className="d-choose">
          <span className="d-choose1">选择</span><span className="d-choose2">颜色、尺码</span><span className="d-choose3"></span>
        </li>
        <li className="d-coupon">
          <span className="d-choose1">领券</span><span className="d-choose2">每满300减30</span><span className="d-choose3"></span>
        </li>
        <li className="d-introduce">
          <span className="d-choose1">说明</span><span className="d-choose2">免运费 | 商品投资 | 支持7天无理由退货</span><span className="d-choose3"></span>
        </li>
      </ul>
      {/* <img className="d-detailintro" src={require('@/images/detail/detail-introduce.png')} alt="详情介绍" />
      <img className="d-donot" src={require('@/images/detail/donot.png')} alt="dont" />
      <img className="d-champion" src={require('@/images/detail/champion.png')} alt="champion" /> */}
      {
        console.log("niaho",this.props.goodsimglist)
      }
      {this.props.goodsimglist.map((item,index)=>{
        return (<img className="goodsimg" key= {index}  src = {item.src} alt = {index} />)
      })}

      {/* <img  src={require('@/images/detail/details.png')} alt="dont" />
      <img  src={require('@/images/detail/size.png')} alt="dont" />
      <img  src={require('@/images/detail/details.png')} alt="dont" />
      <img  src={require('@/images/detail/wash.png')} alt="dont" />
      <img  src={require('@/images/detail/bandstory.png')} alt="dont" /> */}
      <div ref="joinsuccess" className="joinsuccess"><img src={require('@/images/detail/joinsuccess.png')}/ ></div>
      <div className="gai"></div>
      </div>
      <div className="justbuy">
        <div className="buy-left">
          <div>
            <i className="collection"></i>
            <span>收藏</span>
          </div>
          <div>
            <i className="discuss"></i>
            <span>评论</span>
          </div>
          <div>
            <i className="cart"></i>
            <span>购物车</span>
          </div>
        </div>
        <div className="buy-center" onClick = { this.toBuy.bind(this) }>加入购物车</div>
        <div className="buy-right">立即购买</div>
      </div>
                    <Buy ref = 'buyCom' className = {this.state.buyName} /> 
      </div>
    )
  }
  
}

export default App;