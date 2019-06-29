import React from 'react';

class App extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  componentDidMount(){

  }
  render(){
    console.log(this.props)
    return (
      <div className= {`buysomething ${this.props.className}`}>
      <div className="d-toast">
        <div className="d-style">
          <div className="color-size">
            <span>颜色、 尺寸</span><i className="iconfont icon-cuowu"></i>
          </div>
          <div className="d-please">
            <div className="d-price-color">
              <img className="goodsdetail" src={require('@/images/detail/goodsdetail.png')} alt='goods' />
              <div className="price-main">
                <p className="d-price1">$199</p>
                <p className="d-price2">请选择颜色、尺码</p>
              </div>
            </div>
            <div className="d-choose-color">
              <p className="d-yanse">颜色</p>
              <div className="colorchoice">
                <span>黄色</span>
                <span>浅灰色</span>
                <span>紫色</span>
                <span>蓝色</span>
              </div>
            </div>
          </div>
          <div className="d-choose-size">
              <p className="chima">尺码</p>
              <div className="sizechoice">
                <span>XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
              </div>
            </div>
        </div>
        <div className="d-confirm">确认</div>
      </div>
      </div>
    )
  }
}

export default App;