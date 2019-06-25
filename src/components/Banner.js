import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

const App = ({ bannerlist }) => {
  // console.log(bannerlist)
  return (
    <WingBlank>
        <Carousel
          autoplay
          infinite
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
        

          {bannerlist.map((val, index) => (
            <a
              key={index}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: '1.02rem' }}
            >
              <img
                src={ val.src }
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height: '1.02rem'  }}
                // onLoad={() => {
                //   // fire window resize event to change height
                //   window.dispatchEvent(new Event('resize'));
                //   this.setState({ imgHeight: 'auto' });
                // }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
  )
}

export default App;