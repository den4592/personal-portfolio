import { gsap } from "gsap";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    gsap
      .timeline()
      .add("start")
      .fromTo(
        ".portfolio",
        {
          yPercent: 100,
        },
        { yPercent: 0, duration: 1 },
        "start"
      )
      .to(
        ".portfolio__text",
        {
          duration: 1.2,
          y: -10,
          repeat: -1,
          yoyo: true,
        },
        "start"
      )
      .fromTo(
        ".title__first",
        { opacity: 0, x: -500 },
        { opacity: 1, x: 0, duration: 2 }
      )
      .to(".title__first", {
        rotation: -180,
        transform: "scale(20)",
        duration: 2,
        opacity: 0,
      })
      .to(".intro", { backgroundColor: "#000", duration: 2 })
      .fromTo(
        ".intro__left-second",
        { opacity: 0 },
        { opacity: 1, duration: 2 }
      )
      .to(".intro", { backgroundColor: "#fff", duration: 1.5 })
      .add("start")
      .to(
        ".portfolio",
        {
          opacity: 0,
          duration: 2,
        },
        "start"
      )
      .to(
        ".growth",
        {
          opacity: 1,
          duration: 3,
        },
        "start"
      );
  }, []);

  return (
    <section>
      <div className="intro">
        <div className="intro__left">
          <div className="intro__left-first">
            <h1 className="title__first">WELCOME</h1>
          </div>
          <div className="intro__left-second">
            <h1 className="title__second">EXPLORE</h1>
            <h1 className="title__third">ME</h1>
          </div>
        </div>
        <div className="portfolio">
          <h2 className="portfolio__text">ILYA's Portfolio</h2>
        </div>
      </div>
      <div className="main">
        <ul className="growth">
          <h2 className="growth__title">growth progress</h2>
          <hr />
          <li>qwe</li>
          <hr />
          <li>qwe</li>
          <hr />
          <li>qwe</li>
          <hr />
          <li>qwe</li>
          <hr />
          <li>qwe</li>
          <hr />
        </ul>
      </div>
    </section>
  );
};

export default Hero;
