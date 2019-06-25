import React from 'react';

const Com = (props) => (
  <header className = { props.className }>
    <span className = { props.class } onClick = { () => { props.history.go(-1)}}></span>
    <span className = "title">{ props.title }</span>
    <span className = "right">{ props.right }</span>
  </header>
)

export default Com;