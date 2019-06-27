import React from 'react';
import '@/style/user.scss';
import userimg from '../../img/login.png';


class Com extends React.Component {
  constructor (props) {
    super(props);
    this.orderlist = [
      { className: 'ico-bg q', title: '待付款'},
      { className: 'ico-bg w', title: '待发货'},
      { className: 'ico-bg e', title: '待收货'},
      { className: 'ico-bg r', title: '已取消'}
    ]
    this.viplist = [
      { className: 'ico-bg a', title: '会员中心'},
      { className: 'ico-bg s', title: '设置'},
      { className: 'ico-bg d', title: '联系客服'}
    ]
  }
  orderclick (index) {
    if (!'isLogin' == 'ok') {
      this.props.history.push('/other/login')
    } else {
      if (index == 0) {
        this.props.history.push('')
      } else if (index == 1) {
        this.props.history.push('')
      } else if (index == 2) {
        this.props.history.push('')
      } else {
        this.props.history.push('')
      }
    }
  }

  render () {
    return (
      <div className = "box4">
        <div className = "content">
          <div className = "user">
            <div className = "cir1"></div>
            <div className = "cir2"></div>
            <div className = "cir3"></div>
            <div className = "cir4"></div>
            <div className = "cir5"></div>
            <div className = "u">
              <div className = "u_l">
                <img src = { userimg } alt = "" />
              </div>
              <div className = "u_r">
                <div className = "u_r_t">
                  <i className = "ico-bg" />
                  <i className = "ico-bg" />
                </div>
                <div className = "u_r_c">
                  <span>黑化肥</span>
                  <i className = "ico-bg" />
                </div>
                <div className = "u_r_b">
                  <span>积分 0</span><span>金币 0</span><span>点赞数 0</span><span>喜欢 0</span>
                </div>
              </div>
            </div>
          </div>
          <div className = "con">
            <div className = "collection">
              <div className = "c_l">
                <i className = "ico-bg" />
                <span>我的收藏</span>
              </div>
              <div className = "c_r">
                <i className = "ico-bg" />
              </div>
            </div>
            <div className = "order">
              <div className = "o_t">
                <div className = "o_t_l">
                  <i className = "ico-bg" />
                  <span>我的订单</span>
                </div>
                <div className = "o_t_r">
                  <span>查看全部订单</span>
                  <i className = "ico-bg" />
                </div>
              </div>
              <div className = "o_b">
                <ul>
                  {
                    this.orderlist.map((item, index) => (
                      <li key = { index } >
                        <span className = { item.className }></span>
                        <p>{ item.title }</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className = "address">
              <div className = "a_t">
                <div className = "a_t_l">
                  <i className = "ico-bg" />
                  <span>我的地址</span>
                </div>
                <div className = "a_t_r">
                  <i className = "ico-bg" />
                </div>
              </div>
            </div>
            <div className = "vip">
            <ul>
              {
                this.viplist.map((item, index) => (
                  <li key = { index }>
                    <div className = "v_l">
                      <i className = { item.className } />
                      <span>{ item.title }</span>
                    </div>
                    <div className = "v_r">
                      <i className = "ico-bg" />
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;