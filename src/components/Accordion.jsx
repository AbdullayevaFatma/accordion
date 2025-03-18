import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null)
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          text={item.text}
          title={item.title}
          num={item.id}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        />
      ))}
    </div>
  );
};

export default Accordion;
