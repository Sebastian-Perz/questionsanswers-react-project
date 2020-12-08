import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [expand, setExpand] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setExpand(!expand)} className="btn">
          {expand ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expand && <p>{info}</p>}
    </article>
  );
};

export default Question;
