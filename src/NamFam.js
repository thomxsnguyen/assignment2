import React, { useEffect, useState, useRef } from "react";
import { Browser as Router, NavLink, useLocation } from "react-router-dom";
import { ReactTyped } from "react-typed";

import martin from "./images/topic1pic1.jpg";
import eric from "./images/topic1pic2.jpg";
import angie from "./images/topic1pic3.jpeg";

import namfam1 from "./polaroids/namfam1.png";
import namfam2 from "./polaroids/namfam2.png";
import namfam3 from "./polaroids/namfam3.png";

const message = [
  <>
    The most compelling argument for the idea that we are in a simulation is to
    be seen in the very mathematical nature of the universe. From physics to
    physics, the universe follows strict equations which not only cohere but are
    very leading one to speculate whether reality is code-based. To begin with,
    consider the fine-tuning of the physical constants. Constants such as the
    gravitational constant, the velocity of light, and the electromagnetic force
    strength are all so close to each other that there is life. An infinitesimal
    change in any one of these would lead to a universe with no stars, no
    chemistry, or stability. This near-random precision is uncannily close to
    defining variables in a computer system to generate a certain
    result—suggesting a universe that might have been set up deliberately.
  </>,
  <>
    Secondly, its discreteness is also in its favor. Space and time are not
    divisible into infinitely small units, quantum theories of mechanics and
    gravity suppose. The smallest length we can imagine, the Planck length, is
    rumored to be the "pixel size" of the universe. Below that, our
    understanding of space no longer works. Just like the images on a screen are
    made up of pixels, our universe appears to have a resolution of origin,
    which would imply that it could be a reality that's been simulated with
    limits of accuracy—such as a simulation.
  </>,
  <>
    Third, the ubiquity of mathematics in patterns throughout nature gives
    additional clues. The Fibonacci sequence is located from flower petals to
    galaxy spirals. Fractal patterns occur on coastlines, lightning, and lungs.
    The self-similar, scaleable patterns are representative of the procedure of
    procedural generation—a computional process used in simulations and video
    games to generate complicated worlds out of simple rules. The fact that
    these patterns are everywhere in the universe, from the infinitesimal to the
    cosmic, lends support to the notion that a finite set of rules might be
    governing an exponentially huge, complex system—one that's less aleatory and
    more pre-programmed.
  </>,
];

const NamFamHeader = ({
  scrollToMartin,
  scrollToEric,
  scrollToAngie,
  scrollToNamFam,
}) => {
  return (
    <header className="header">
      <div className="left-header">
        <p>Physics 20B</p>
        <nav className="scroll-down">
          <button className="scroll-topics" onClick={scrollToMartin}>
            Mathmetical Structure Of The Universe
          </button>
          <button className="scroll-topics" onClick={scrollToEric}>
            Discrete Nature of Space-Time
          </button>
          <button className="scroll-topics" onClick={scrollToAngie}>
            Universaility of Math Patterns
          </button>
        </nav>
      </div>
      <div className="links-container">
        <NavLink to="/" className="link">
          home
        </NavLink>
        <NavLink to="/thebums" className="link">
          the bums
        </NavLink>
        <NavLink to="/hometown" className="link">
          hometown
        </NavLink>
      </div>
    </header>
  );
};

const Message = ({ imgSrc, imgAlt, message, imgRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="name">
      <div className="people">
        <img
          ref={imgRef}
          src={imgSrc}
          alt={imgAlt}
          className={`people-pic ${isVisible ? "visible" : ""}`}
        />
      </div>
      <div className="message">{message}</div>
    </div>
  );
};

const NamFam = () => {
  const martinImgRef = useRef(null);
  const ericImgRef = useRef(null);
  const angieImgRef = useRef(null);
  const namfamImgRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    document.body.style.overflowY = pathname === "/namfam" ? "auto" : "hidden";
  }, [location]);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="app-container">
      <NamFamHeader
        scrollToMartin={() => scrollToRef(martinImgRef)}
        scrollToEric={() => scrollToRef(ericImgRef)}
        scrollToAngie={() => scrollToRef(angieImgRef)}
        scrollToNamFam={() => scrollToRef(namfamImgRef)}
      />
      <div className="body-container">
        <div className="message-container">
          <div className="sub-title">
            <ReactTyped
              strings={["Mathematical Structure\nof the Universe"]}
              typeSpeed={150}
              backSpeed={100}
              loop={false}
              typedRef={(typed) => {
                if (typed) {
                  typed.options.onComplete = () => {
                    typed.cursor.remove();
                  };
                }
              }}
              style={{ whiteSpace: "pre-line" }} // this is key to render \n
            />
          </div>

          <div className="messages">
            <Message
              imgRef={martinImgRef}
              imgSrc={martin}
              imgAlt="martin"
              message={message[0]}
            />
            <Message
              imgRef={ericImgRef}
              imgSrc={eric}
              imgAlt="eric"
              message={message[1]}
            />
            <Message
              imgRef={angieImgRef}
              imgSrc={angie}
              imgAlt="angie"
              message={message[2]}
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NamFam;
