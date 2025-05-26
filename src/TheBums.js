import React, { useEffect, useState, useRef } from "react";
import { Browser as Router, NavLink, useLocation } from "react-router-dom";
import { ReactTyped } from "react-typed";

import kai from "./images/nick.jpeg";
import josh from "./images/veo.png";
import roy from "./images/will.png";
import assignment2 from "./assignment2.mp4";

const message = [
  <>
    Nick Bostrom's Simulation Argument assumes that if it is technologically
    feasible to create conscious simulates, and if the will of advanced
    civilizations is to make simulations, then simulated worlds would outnumber
    base reality many times over. Here, it is more statistically likely that we
    are inside one of these simulations instead of in the initial, physical
    world. This is premised on the argument that computing power and creative
    capacity will continue to improve to the point where simulations will be
    indistinguishable from actual reality—not so much an abstract theory anymore
    as our current technology is rapidly improving in that direction.
  </>,
  <>
    One of the best examples of this technology trajectory is Veo, Google
    DeepMind's generative model that creates cinematic-quality video from text
    inputs. Veo version 3 was released at Google I/O 2025, and it illustrates
    just how advanced generative models have become. Veo can create realistic
    video with complex scene composition, nuanced facial expressions, ambient
    audio, and contextual storytelling—all based on simple instructions. With
    technology such as Veo, the distinction between content made through digital
    means and real content is eliminated. Such advancements now make copying
    worlds, characters, and even emotions no longer an academic occurrence—it
    happens, and it only improves.
  </>,
  <>
    When artificial intelligence software like Flow is layered over Veo,
    creators can construct complete narratives—plots, scenes, characters, and
    special effects—without traditional film crews and cameras. Such a
    democratization of virtual content construction implies that constructing
    believable alternative realities may soon be within reach not just of
    institutions but also of individuals. And if we can already mimic video and
    audio to virtual perfection in 2025, it would be no difficulty for a
    far-future civilization to simulate an entire universe, including conscious
    life. And then, as a result, Bostrom's argument becomes all but impossible
    to ignore: if this simulated world is possible, and a few civilizations even
    give it a go, then the probability that we are living in one of them becomes
    terrifyingly high.
  </>,
];

const TheBumsHeader = ({ scrollToKai, scrollToJosh, scrollToRoy }) => {
  return (
    <header className="header">
      <div className="left-header">
        <p>Physics 20B</p>
        <nav className="scroll-down">
          <button className="scroll" onClick={scrollToKai}>
            Nick Bostrom
          </button>
          <button className="scroll" onClick={scrollToJosh}>
            Google's Veo
          </button>
          <button className="scroll" onClick={scrollToRoy}>
            From Tools to Worlds
          </button>
        </nav>
      </div>
      <div className="links-container">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/namfam" className="link">
          Mathematical Structure of the Universe
        </NavLink>
        <NavLink to="/hometown" className="link">
          Conclusion/Sources
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

const TheBums = () => {
  const kaiImgRef = useRef(null);
  const joshImgRef = useRef(null);
  const royImgRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    if (pathname === "/thebums") {
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
      <TheBumsHeader
        scrollToKai={() => scrollToRef(kaiImgRef)}
        scrollToJosh={() => scrollToRef(joshImgRef)}
        scrollToRoy={() => scrollToRef(royImgRef)}
      />
      <div className="body-container">
        <div className="message-container">
          <div className="sub-title">
            <ReactTyped
              strings={["Advancing Technology"]}
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
              imgRef={kaiImgRef}
              imgSrc={kai}
              imgAlt="kai"
              message={message[0]}
            />
            <Message
              imgRef={joshImgRef}
              imgSrc={josh}
              imgAlt="josh"
              message={message[1]}
            />
            <Message
              imgRef={royImgRef}
              imgSrc={roy}
              imgAlt="roy"
              message={message[2]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheBums;
