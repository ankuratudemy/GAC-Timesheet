import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const Button = ({ onClick, name }) => (
  <button style={{backgroundColor: '#01587D',  color: 'white', fontSize: '15px', border: 'none', marginRight: '5px'}} onClick={onClick}>
    {name}
  </button>
);

export default Button;
