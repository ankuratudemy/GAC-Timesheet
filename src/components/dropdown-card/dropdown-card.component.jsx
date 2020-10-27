import React from "react";
import './dropdown-card.styles.css'


const DropDownCard = ({name, data = [], setOpen,handleInputChange }) => 
 
 (       <div className="dropdown-content">
    
      {data.map((item, i) => (
        <a key ={name+'_'+i} id={name+'_'+i}  onClick={(event) =>{setOpen(false);handleInputChange(event);} }>
          {item.EmployeeName? item.EmployeeName+'('+item.SvsId+')' : item}
        </a>
      ))}
  
  </div>
);

export default DropDownCard;