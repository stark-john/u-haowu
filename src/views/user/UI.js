import React from 'react';
import '@/style/user.scss';

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.orderlist = [
      { className: 'iconfont icon-daifukuan', title: '待付款'},
      { className: 'iconfont icon-daifahuo', title: '待发货'},
      { className: 'iconfont icon-daishouhuo', title: '待收货'},
      { className: 'iconfont icon-yiquxiao', title: '已取消'}
    ]
    this.viplist = [
      { className: 'iconfont icon-huiyuanzhongxin', title: '会员中心'},
      { className: 'iconfont icon-shezhi', title: '设置'},
      { className: 'iconfont icon-kefu', title: '联系客服'}
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
        <header className = "header">
          <span className = "title">我</span>
        </header>
        <div className = "content">
          <div className = "user">
            <div className = "u_t">
              <div className = "u_t_l">
                <span className = "iconfont icon-yonghudianji"></span>
              </div>
              <div className = "u_t_r">
                <div className = "u_t_r_">
                  <h3>黑化肥</h3>
                  <div className = "u_t_r_b">
                    <span>0积分</span><span>0金币</span>
                  </div>
                </div>
              </div>
            </div>
            <div className = "u_b">
              <div className = "u_b_l">
                <span className = "iconfont icon-aixin"></span>
                <span>我的收藏</span>
              </div>
              <div className = "u_b_r">
                <span className = "iconfont icon-youjiantou"></span>
              </div>
            </div>
          </div>
          <div className = "order">
            <div className = "o_t">
              <div className = "o_t_l">我的订单</div>
              <div className = "o_t_r">
                <span>查看全部订单</span>
                <span className = "iconfont icon-youjiantou"></span>
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
                <div className = "a_t_l">我的地址</div>
                <div className = "a_t_r">
                  <span className = "iconfont icon-youjiantou"></span>
                </div>
            </div>
            <div className = "a_b">
              <div className = "a_b_t">
                <span>蟹无名</span>
                <span>+8612552356955</span>
              </div>
              <div className = "a_b_b">
                <span>河南省  郑州市  金水区  今夕何夕H座12楼</span>
                <span>（默认地址）</span>
              </div>
            </div>
          </div>
          <div className = "vip">
            <ul>
              {
                this.viplist.map((item, index) => (
                  <li key = { index }>
                    <div className = "v_l">
                      <span className = { item.className }></span>
                      <span>{ item.title }</span>
                    </div>
                    <div className = "v_r">
                      <span className = "iconfont icon-youjiantou"></span>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;