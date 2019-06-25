import React from 'react';
import '@/style/home.scss';
import Banner from '@/components/Banner';

class Com extends React.Component {

  componentDidMount () {
    this.props.getHomeBannerListData();
    this.props.getHomeNavListData();
  }

  render () {
    return (
      <div className = "box">
        <header className = "h-header">
          <div className = "search">
            <span>大家正在搜: GNC保健大促</span><i className="iconfont icon-sousuo"></i>
          </div>
        </header>
        <div className = "content">
          <Banner bannerlist= {this.props.bannerlist}/>
          <div className="h-nav">
            <ul>
              {
                // console.log(this.props.navlist)
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
                this.props.navlist.map((item, index)=>{
                  return (
                    <li key = { index }>
                    <img src="//img.alicdn.com/imgextra/i3/283185089/O1CN01HjhAxO1nSo5n8deDg_!!283185089.jpg_640x640q85s150_.webp" alt=""/>
                    <div className="right">
                      <h3 className="goodsName">法式复古小黑裙女春装2019新款韩版chic圆领修身显瘦短袖连衣裙子</h3>
                      <div className="discount">
                        <span>低至2.7折</span>
                        <p>
                          <i>￥</i><span>34.5</span>
                        </p>
                      </div>
                      <div className="goods-b">
                        <i className="iconfont icon-xing"></i><span>541</span><i className="iconfont icon-message"></i><span>120</span>
                        <span className="time">22分钟前</span>
                      </div>
                    </div>
                  </li> 
                  )
                })
                }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;