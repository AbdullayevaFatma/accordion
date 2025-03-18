

const AccordionItem = ({ num, title, text,curOpen, setCurOpen }) => {
  const isOpen = num === curOpen;

  const handleToggle = () =>{
    setCurOpen(isOpen ? null : num)
  }
  return   <>
  <div
    className={`item ${isOpen ? "open" : ""}`}
    onClick={handleToggle}
  >
    <p className="number">{num < 10 ? `0${num}` : num}</p>
    <p className="title">{title}</p>
    <p className="icon">{isOpen ? "-" : "+"}</p>
    {isOpen && <div className="content-box">{text}</div>}
  </div>
</>
};

export default AccordionItem;
