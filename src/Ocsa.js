import React, { useEffect, useState, useRef } from "react";
import { Browser as Router, NavLink, useLocation } from "react-router-dom";
import { ReactTyped } from "react-typed";

import michelle from "./images/conclusion.png";
import noemi from "./images/source4.png";
import branden from "./images/source2.png";
import ally from "./images/veo-3-1.jpg";
import lauren from "./images/source1.png";

const message = [
  <>
    With the advancing technologies like Google's Veo, capable of creating whole
    scenes from vague descriptions, and Bostrom's compelling statistical case,
    the difference between simulated and real reality is increasingly
    questioned. From the mathematical precision of the universe to the new
    ability to generate simulated life-like environments and actions, each
    string we pull seems to unravel our assumptions about what there is. While
    we may never truly know for certain if we are in a simulation, the evidence
    continues to build that it's a possibility we can no longer ignore. If our
    own civilization is already beginning to simulate aspects of reality with
    AI, then it's very possible that another—much more advanced—already does,
    and we may be the product.
  </>,
  <>
    Bostrom, N. (2003). Are You Living in a Computer Simulation? Philosophical
    Quarterly, 53(211), 243–255.
  </>,
  <>
    Tegmark, M. (2014). Our Mathematical Universe: My Quest for the Ultimate
    Nature of Reality. Knopf.
  </>,
  <>Google DeepMind. (2025). Veo 3: AI Video Generation Model.</>,
  <>
    Smolin, L. (2013). Spacetime Is Not Necessarily Continuous. Scientific
    American.
  </>,
];

const OscaHeader = ({
  scrollToMichelle,
  scrollToLauren,
  scrollToBranden,
  scrollToAlly,
  scrollToNoemi,
}) => {
  return (
    <header className="header">
      <div className="left-header">
        <p>Physics 20B</p>
        <nav className="scroll-down">
          <button className="scroll" onClick={scrollToMichelle}>
            Conclusion
          </button>
          <button className="scroll" onClick={scrollToLauren}>
            Source #1
          </button>
          <button className="scroll" onClick={scrollToBranden}>
            Source #2
          </button>
          <button className="scroll" onClick={scrollToAlly}>
            Source #3
          </button>
          <button className="scroll" onClick={scrollToNoemi}>
            Source #4
          </button>
        </nav>
      </div>
      <div className="links-container">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/thebums" className="link">
          Mathematical Structure of the Universe
        </NavLink>
        <NavLink to="/namfam" className="link">
          Advancing Technology
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

const Osca = () => {
  const michelleImgRef = useRef(null);
  const laurenImgRef = useRef(null);
  const noemiImgRef = useRef(null);
  const allyImgRef = useRef(null);
  const brandenImgRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    if (pathname === "/hometown") {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [location]);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="app-container">
      <OscaHeader
        scrollToMichelle={() => scrollToRef(michelleImgRef)}
        scrollToLauren={() => scrollToRef(laurenImgRef)}
        scrollToBranden={() => scrollToRef(brandenImgRef)}
        scrollToAlly={() => scrollToRef(allyImgRef)}
        scrollToNoemi={() => scrollToRef(noemiImgRef)}
      />
      <div className="body-container">
        <div className="message-container">
          <div className="sub-title">
            <ReactTyped
              strings={["Conclusion"]}
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
            />
          </div>

          <div className="messages">
            <Message
              imgRef={michelleImgRef}
              imgSrc={michelle}
              imgAlt="michelle"
              message={message[0]}
            />
            <Message
              imgRef={laurenImgRef}
              imgSrc={lauren}
              imgAlt="lauren"
              message={message[1]}
            />
            <Message
              imgRef={brandenImgRef}
              imgSrc={branden}
              imgAlt="branden"
              message={message[2]}
            />
            <Message
              imgRef={allyImgRef}
              imgSrc={ally}
              imgAlt="ally"
              message={message[3]}
            />
            <Message
              imgRef={noemiImgRef}
              imgSrc={noemi}
              imgAlt="noemi"
              message={message[4]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Osca;
