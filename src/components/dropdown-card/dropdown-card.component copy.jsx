import React from "react";
import './dropdown-card.styles.css'


const DropDownCard = ({ data = [], setOpen }) => (
  <div >
    <ul className='.dropdown-content'>
      {data.map((item, i) => (
        <li key={i} style={{}} onClick={() => setOpen(false)}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default DropDownCard;