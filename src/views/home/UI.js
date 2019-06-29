import React from 'react';
import '@/style/home.scss';
import Banner from '@/components/Banner'; 
const color = ['red','black','yellow','pink','green','blue','#f66']
class Com extends React.Component {

  componentDidMount () {
    this.props.getHomeBannerListData();
    this.props.getHomeNavListData();
    this.props.getHomeGoodsListData();
  }
  jumpToGoodsList(index){
    this.props.history.push('/branch/clothes');
  }
  jumpToGoodsDetail(index){
    this.props.history.push('/branch/detail');
  }
  render () {
    return (
      <div className = "box">
        <header className = "h-header" style = {{ background: color[this.props.bannerIn]}}>
          <div className = "search">
            <span>大家正在搜: GNC保健大促</span><i className="iconfont icon-sousuo"></i>
          </div>
        </header>
        <div className = "content" ref = "content">
          <div className="change" style = {{ position: 'relative' }}>
           <div className="covered" style = {{ background:color[this.props.bannerIn]}}></div>
           <Banner bannerlist= {this.props.bannerlist} imgheight={this.props.imgheight} {...this.props}/>
          </div>
          <div className="h-nav">
            <ul>
              {
                console.log(this.props.goods,"hahahha")
              }
              {
                this.props.navlist.map((item, index)=>{
                  return (
                    <li key = {index} onClick={this.jumpToGoodsList.bind(this,index)}>
                      <img src = {item.src} alt= {item.title}/>
                      <span>{item.title}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className = "h-goods">
            <ul>
              {
                // console.log(this.props.goods)
              }
              {
               this.props.goods.map((item, index)=>{
                 console.log(item)
                  return (
                    <li key={index} onClick={this.jumpToGoodsDetail.bind(this,index)}>
                      <img src={item.src} alt="" />
                      <div className="home-goods">
                        <h3 className='h-title'>{item.title}</h3>
                        <div className="goods-box">
                          <div className="goods-box-l">
                            <p className="h-describe">{item.describe}</p>
                            <p className="h-price">
                              <span className="h-price-n">${item.pricenow}</span>
                              <span className="h-price-o">${item.priceold}</span>
                              <img className="h-once" src={require('../../images/home/once.png')} alt="" />
                            </p>
                          </div>
                          <div className="goods-box-r"></div>
                        </div>
                      </div>
                    </li>

                  )
                })
                }
            </ul>
            <div className="h-bottom">我也是有底线的~~~</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;