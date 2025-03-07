import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null)
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          text={item.text}
          title={item.title}
          num={index}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        />
      ))}
    </div>
  );
};

export default Accordion;
