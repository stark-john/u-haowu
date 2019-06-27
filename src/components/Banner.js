import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

const App = (props) => {
  const  { bannerlist, imgheight, } = props;
  // console.log(imgheight)
  return (
    <WingBlank>
        <Carousel
          autoplay
          infinite
          beforeChange={(from, to) => props.getHomeBannerIn(to)}
          // afterChange={index => console.log('slide to', index)}
        >
        

          {bannerlist.map((val, index) => (
            <a
              key={index}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: imgheight }}
            >
              <img
                src={ val.src }
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height: imgheight }}
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