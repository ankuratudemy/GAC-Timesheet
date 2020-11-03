import React from "react";
import Button from "./button";
import DropDownCard from "../dropdown-card/dropdown-card.component";
 const Dropdown = ({data,name,handleInputChange}) => {

  const [open, setOpen] = React.useState(false);
  const drop = React.useRef(null);

  function handleClick(e) {
   // console.log("Event1",e)
    if (!e.target.closest(`.${drop.current.className}`) && open) {
      setOpen(false);
    }
  } 
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });


  return (

  
    <div
      className="dropdown"
      ref={drop}
      style={{
        position: "relative",
        margin: "16px",
        width: "auto",
        display: "inline-block"
      }}
    >
      <Button name={name}  onClick={() => setOpen(open => !open)} />
      {open && <DropDownCard name={name} handleInputChange={handleInputChange} data={data} setOpen={setOpen} />}
    </div>
  );
};

export default Dropdown;
