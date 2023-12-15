import React, { Children } from 'react';
import './button.css'

const Button = (props) => {
    const {children, style} = props;
  return (
    <button style={style? style: {}} className={`button ${style? '': 'btn-grad'}`}>{children}</button>
  )
};

export default Button;
