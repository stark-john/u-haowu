import React from 'react';
import '@/style/main.scss';

class Com extends React.Component {
  render () {
    return (
      <div className = "box">
        <header className = "header">login头部</header>
        <div className = "content">Home内容</div>
      </div>
    )
  }
}

export default Com;