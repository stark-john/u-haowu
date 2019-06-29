import React from 'react';
import '@/style/online.scss';

class App extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  componentDidMount(){

  }
  render(){
    return (
      <div className="online-box">
        <header className="online-header">
          <i className="online-back"></i><span className='o-text'>好物小秘书</span>
        </header>
        <div className="online-content"></div>
        <footer className="online-footer">
          <div className="inputquestion">
            <input type="text" placeholder="请输入问题" />
            <i className="iconfont icon-biaoqing"></i>
          </div>
          <i className="iconfont icon-icon-cancel"></i>
          <div className="send-word">发送</div>
        </footer>
      </div>
    )
  }
}

export default App;