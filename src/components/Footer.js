import React from 'react';
import { NavLink }  from 'react-router-dom';


class Com extends React.Component{

  shouldComponentUpdate () {
    return false;
  }

  render () {
    return (
      <footer className = "footer">
        <ul>
          <NavLink to = '/home' >
            <span className = "iconfont icon-zhuye"></span>
            <p>主页</p>
          </NavLink>
          <NavLink to = "/strategy">
            <span className = "iconfont icon-xinxing"></span>
            <p>品牌街</p>
          </NavLink>
          <NavLink to = "/cart">
            <span className = "iconfont icon-gouwuche1"></span>
            <p>购物车</p>
          </NavLink>
          <NavLink to = "/user">
            <span className = "iconfont icon-wode"></span>
            <p>我的</p>
          </NavLink>
        </ul>
      </footer>
    )
  }
}

export default Com;