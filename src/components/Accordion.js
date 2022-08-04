import { useState } from "react";
import clink from "../img/clink.png";
import secondway_studio from "../img/secondway_studio.png";

const Accordion = () => {
  const [item, setItem] = useState([
    {
      title: "Publishing - CLNK",
      contents: [clink],
      tags: ["html", "css", "js"],
      text: "",
    },
    { title: "Publishing - Secondway_Studio", contents: [secondway_studio] },
  ]);

  const [selected, setSelected] = useState(null);
  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <ul className="list">
      {item.map((it, index) => (
        <li className="item" key={index} onClick={() => toggle(index)}>
          <p className="item__title">{it.title}</p>
          <div
            className={
              selected === index ? "item__contents active" : "item__contents"
            }
          >
            {selected === index && (
              <>
                <img src={`${it.contents[0]}`} alt="" />
                <p>{it.tags}</p>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
