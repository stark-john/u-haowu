import React from 'react';
import '@/style/home.scss';
import Banner from '@/components/Banner';
const color = ['red','black','yellow','pink','green','blue','#f66']
class Com extends React.Component {

  componentDidMount () {
    this.props.getHomeBannerListData();
    this.props.getHomeNavListData();
    // this.props.scrollEvent()
    this.props.getHomeGoodsListData();
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
                    <li key = {index}>
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
                    <li key={index}>
                      <img src={item.src} alt="" />
                      <div className="home-goods">
                        <h3>SHISEIDO 资生堂 UNO 男...</h3>
                        <div className="goods-box">
                          <div className="goods-box-l">
                            <p className="h-describe">男人也要重视洗脸</p>
                            <p className="h-price">
                              <span className="h-price-n">$38</span>
                              <span className="h-price-o">$110</span>
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