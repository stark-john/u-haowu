import React from 'react';
import '@/style/clothes.scss';
import Banner from '@/components/Banner';
// const color=['red','black','blue','yellow','green','pink','purple']



class App extends React.Component {
  constructor (props) {
      super(props)
    this.tools = [1,2,3,4,5,6,7];


    }
    componentDidMount(){
    this.props.getBannerListData();
    // this.props.getImgHeightData()
    // this.changecolor.map((item,index)=>{
      // console.log(item)
      // bannerlist.map((itm,idx)=>{
      //   document.querySelector('.covered').style.background = item
      // })
    // })
  }
  
  
  
  render () {
    console.log(this.props.imgheight)
    return (
      <div className="box">
        <header className="c-header">
          <i className="back"></i>
          <span>服饰配饰</span>
        </header>
        <div className="content">
          <Banner bannerlist= {this.props.bannerlist} imgheight={ this.props.imgheight } {...this.props}/>
          {/* <img src={ require('@/images/SKII.png')} alt="qunawang" /> */}
          <ul className="goods-list">
            {/* <li>
              <img src={require('@/images/water.png')} alt="" />
              <div className="item">
                <p className="item-title">SKⅡ神仙水精华大眼眼霜护肤品套装 滋养护肤正品A</p>
                <p className="price">￥<span>1180</span></p>
              </div>
            </li> */}
            {
           this.tools.map((item,index)=> {
             return (
              <li key={index}>
              <img src={require('@/images/water.png')} alt="" />
              <div className="item">
                <p className="item-title">SKⅡ神仙水精华大眼眼霜护肤品套装 滋养护肤正品A</p>
                <div className="item-data">
                  <div className="item-l">
                    <p className="describe">镇静肌肤，深层补水</p>
                    <p className='price'>
                      <span className="price-n">￥1180</span>
                      <span className="price-o">￥1490</span>
                    </p>
                  </div>
                  <div className="item-r"></div>
                </div>
              </div>
            </li>
             )
           })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default App;