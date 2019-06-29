import React, { Component } from 'react';
import { List, Checkbox } from 'antd-mobile';
import '@/style/cart.scss';

const CheckboxItem = Checkbox.CheckboxItem;


class Com extends Component {
  onChange = (val) => {
    console.log(val);
  }
  render () {
    const data = [
      { value: 0, label: 'Ph.D.' },
      { value: 1, label: 'Bachelor' },
      { value: 2, label: 'College diploma' },
    ];
    return (
      <div className = "box">
        <header className = "cheader">
          <div className = "ctitle">
            <p><span>购物车</span><i>管理</i></p>
          </div>
        </header>
        <div className = "content cartContent">
          <div>
            <div className = "cartlist">
              <List className="cartgoods">
                {data.map(i => (
                  <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                    {/* {i.label} */}
                    <div className="gleft">
                      <p><img src = { require('@/images/cart/cg1.png') } alt=""/></p>
                      <span>0.11公斤</span>
                    </div>
                    <div className="gright">
                      <p className = "gname">Now Foods, 多巴黎豆，90 粒素食胶囊</p>
                      <p className = "gprice"><i>￥</i>87.50</p>
                      <p className = "gcount"><span><i>+</i></span><b>1</b><span><i>-</i></span></p>
                    </div>
                  </CheckboxItem>
                ))}
              </List>
            </div>
            <div className = "guess">
              <h2>猜你喜欢</h2>
              <ul>
                <li>
                  <p className = "gimg"><img src={ require('@/images/cart/guess2.png') } alt=""/></p>
                  <p>New foods 全羊车前子壳</p>
                  <span><i>￥</i>67.49</span>
                </li>
                <li>
                  <p className = "gimg"><img src={ require('@/images/cart/guess2.png') } alt=""/></p>
                  <p>New foods 全羊车前子壳</p>
                  <span><i>￥</i>67.49</span>
                </li>
                <li>
                  <p className = "gimg"><img src={ require('@/images/cart/guess2.png') } alt=""/></p>
                  <p>New foods 全羊车前子壳</p>
                  <span><i>￥</i>67.49</span>
                </li>
                <li>
                  <p className = "gimg"><img src={ require('@/images/cart/guess2.png') } alt=""/></p>
                  <p>New foods 全羊车前子壳</p>
                  <span><i>￥</i>67.49</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className = "gbottom">
          <CheckboxItem>
            <p><i>全选</i><span>合计:<b>￥0元</b><button>结算(0)</button></span></p>
          </CheckboxItem>
        </div>
      </div>
    )
  }
}

export default Com;