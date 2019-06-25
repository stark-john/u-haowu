import React from 'react';
import '@/style/clothes.scss';
import Banner from '@/components/Banner';

class App extends React.Component {
  // constructor (props) {
  //   super(props)
  // }
  componentDidMount(){
    this.props.getBannerListData();
  }
  render () {
    return (
      <div className="box">
        <header className="c-header">
          <i className="iconfont icon-zuo"></i>
        </header>
        <div className="content">
          <Banner bannerlist= {this.props.bannerlist}/>
        </div>
      </div>
    )
  }
}

export default App;