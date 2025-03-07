import React, { useState } from "react";

const AccordionItem = ({ num, title, text,curOpen, setCurOpen }) => {
  const isOpen = num === curOpen;

  const handleToggle = () =>{
    setCurOpen(isOpen ? null : num)
  }
  // const [isOpen, setIsOpen] = useState(false);
  // return (
  //   <>
  //     <div
  //       className={`item ${isOpen ? "open" : ""}`}
  //       onClick={() => setIsOpen((isOpen) => !isOpen)}
  //     >
  //       <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
  //       <p className="title">{title}</p>
  //       <p className="icon">{isOpen ? "-" : "+"}</p>
  //       {isOpen && <div className="content-box">{text}</div>}
  //     </div>
  //   </>
  // );
  
  return   <>
  <div
    className={`item ${isOpen ? "open" : ""}`}
    onClick={handleToggle}
  >
    <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
    <p className="title">{title}</p>
    <p className="icon">{curOpen ? "-" : "+"}</p>
    {isOpen && <div className="content-box">{text}</div>}
  </div>
</>
};

export default AccordionItem;
