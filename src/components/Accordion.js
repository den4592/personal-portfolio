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
    {
      title: "Publishing - Secondway_Studio",
      contents: [secondway_studio],
      tags: ["html", "css", "js"],
      text: "",
    },
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
              <div className="inner">
                <div className="inner__left">
                  <img src={`${it.contents[0]}`} alt="content_img" />
                  <span>#첫 인턴십 #인플루언서 #마케팅 서비스 #퍼블리싱</span>
                </div>

                <ul className="tags">
                  {it.tags.map((tag, index) => (
                    <li className="tag" key={index}>
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
