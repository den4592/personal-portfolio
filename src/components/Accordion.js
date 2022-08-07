import { useState } from "react";
import clink from "../img/clink.png";
import world_countries_data from "../img/world_countries_data.png";
import first_portfolio from "../img/portfolio.png";
import memorystrike from "../img/memorystrike.png";
import weddinginvitation from "../img/weddinginvitation.png";
import { MdDoubleArrow } from "react-icons/md";

const Accordion = () => {
  const [item, setItem] = useState([
    {
      title: "Publishing - CLNK",
      dev_stack: "HTML, CSS, JS",
      contents: [clink],
      tags: ["#첫 인턴십", "#인플루언서", "#마케팅 플랫폼", "#퍼블리싱"],
      text: "학교에서 주최하는 산합협동인턴십으로 (주)버즈비터즈 사에서 '클링크' 웹 사이트 개발을 하였다. ",
      link: "https://c-lnk.com",
    },
    {
      title: "Toy Project - World Coutries",
      dev_stack: "HTML, CSS, JS",
      contents: [world_countries_data],
      tags: ["#토이 프로젝트", "#API", "#ChartJS"],
      text: "세계 나라 데이터를 차트js를 이용하여 시각화 및 정렬 기능을 구현하였다. ",
      link: "https://world-countries-data.netlify.app",
    },
    {
      title: "First Portfolio",
      dev_stack: "React, Styled-Components",
      contents: [first_portfolio],
      tags: ["#첫 포트폴리오", "#리액트", "#styled-components"],
      text: "리액트와 styled-components를 이용하여 첫 포트폴리오 사이트 개발을 하였다.",
      link: "https://denill-port.netlify.app",
    },
    {
      title: "Web App - Memory Strike",
      dev_stack: "React, AWS",
      contents: [memorystrike],
      tags: ["#웹앱", "#리액트", "#랜덤카드", "#복습", "#셀프 테스팅"],
      text: "공부한 내용을 복습 및 셀프 테스팅을 할 수 있는 웹 앱을 개발하였다.",
      link: "https://www.memorystrike.com",
    },
    {
      title: "Mobile Wedding Invitation",
      dev_stack: "MERN Stack, gsap",
      contents: [weddinginvitation],
      tags: ["#모바일 청첩장", "#MERN"],
      text: "MERN stack을 이용한 모바일 청첩장을 개발하였다.",
      link: "https://byeongju-ilsun.netlify.app",
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
          <p className="item__title">
            {it.title}
            <span className="dev-stack">{it.dev_stack}</span>
          </p>
          <div
            className={
              selected === index ? "item__contents active" : "item__contents"
            }
          >
            {selected === index && (
              <div className="inner">
                <div className="inner__left">
                  <img src={`${it.contents[0]}`} alt="content_img" />
                </div>
                <ul className="tags">
                  {it.tags.map((tag, index) => (
                    <li className="tag" key={index}>
                      <strong>
                        <span>{tag}</span>
                      </strong>
                    </li>
                  ))}
                </ul>
                <p className="inner__text">{it.text}</p>

                <a href={it.link} target="__blank">
                  see live
                  <MdDoubleArrow className="btn" />
                </a>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
