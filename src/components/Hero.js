import { gsap } from "gsap";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    gsap
      .timeline()
      .add("start")
      .fromTo(
        ".content",
        {
          yPercent: -100,
          opacity: 0,
        },
        { yPercent: 0, duration: 1, opacity: 1 },
        "start"
      )
      .to(
        ".portfolio-text",
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
      .to(".section1", { backgroundColor: "#000", duration: 2 })
      .fromTo(
        ".hero__title-second",
        { opacity: 0 },
        { opacity: 1, duration: 2 }
      )
      .to(".section1", { backgroundColor: "#fff", duration: 1.5 })
      .to(".content", {
        opacity: 0,
        duration: 2,
      });
  }, []);

  return (
    <section className="section1">
      <div className="container">
        <div className="hero">
          <div className="hero__title-container">
            <h1 className="title__first">WELCOME</h1>
          </div>
          <div className="hero__title-second">
            <h1 className="title__second">EXPLORE</h1>
            <h1 className="title__third">ME</h1>
          </div>
        </div>
      </div>
      <div className="content">
        <h2 className="portfolio-text">ILYA's Portfolio</h2>
      </div>
    </section>
  );
};

export default Hero;
