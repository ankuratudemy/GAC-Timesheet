import React from "react";
import './dropdown-card.styles.css'


const DropDownCard = ({name, data = [], setOpen,handleInputChange }) => 
 {
if(data[0].EmployeeName) {
 
 return (   
   

      <div className="dropdown-content">
    
      {data.map((item, i) => (
        <a key ={item.SvsId} data-key ={item.SvsId} id={name+'_'+i}  onClick={(event) =>{setOpen(false);handleInputChange(event);} }>
          {item.EmployeeName? item.EmployeeName+'('+item.SvsId+')' : item}
        </a>
      ))}
  
  </div>
)
      }

      else if(data[0].ProjectName) {
 
        return (   
          
       
             <div className="dropdown-content">
           
             {data.map((item, i) => (
               <a key ={item.ProjectId} data-key ={item.ProjectId} id={name+'_'+i}  onClick={(event) =>{setOpen(false);handleInputChange(event);} }>
                 {item.ProjectName? item.ProjectName+'('+item.ProjectId+')' : item}
               </a>
             ))}
         
         </div>
       )
             }
             else{

               
        return (   
          
       
          <div className="dropdown-content">
        
          {data.map((item, i) => (
            <a key ={name+'_'+i} id={name+'_'+i}  onClick={(event) =>{setOpen(false);handleInputChange(event);} }>
              {item}
            </a>
          ))}
      
      </div>
    )
             }

};

export default DropDownCard;