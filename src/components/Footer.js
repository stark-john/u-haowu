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
            <span className = ""></span>
            <p>首页</p>
          </NavLink>
          <NavLink to = "/strategy">
            <span className = ""></span>
            <p>攻略</p>
          </NavLink>
          <NavLink to = "/cart">
            <span className = ""></span>
            <p>购物车</p>
          </NavLink>
          <NavLink to = "/user">
            <span className = ""></span>
            <p>我的</p>
          </NavLink>
        </ul>
      </footer>
    )
  }
}

export default Com;