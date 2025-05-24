import React, { useEffect, useState, useRef } from "react";
import { Browser as Router, NavLink, useLocation } from "react-router-dom";
import { ReactTyped } from "react-typed";

import kai from "./polaroids/kai.png";
import josh from "./polaroids/josh.png";
import roy from "./polaroids/roy.png";

const message = [
  <>
    Happy 20th birthday Audrey! You might be one of the loudest people i know
    but that makes you the life of our parties! Thank you for always being a
    great friend to me and supporting me whenever i need it! I can’t wait till
    you’re 21 so we can (legally) drink Best little sister frfr!
  </>,
  <>
    happy birthday audrey ! first bday celebration together & im very grateful
    to be here for it . thank you for being such a great friend to me & im
    really happy w the bond we’ve created & how close we’ve gotten over the year
    . i appreciate all the things you do for me & am excited to see all the
    great things you’ll do !i hope 20 blesses u , you deserve all the best
    <br />
    -roy
  </>,
  <>
    “hey Audrey!! happy birthday! damn you old…20…goddamn. jk, in all
    seriousness I’m glad to have known you for this long and it’s still so crazy
    to me that we are super close now. I couldn’t have imagined being such good
    friends with you back in church but I’m so glad that we are. it’s only up
    from here, your 20’s are going to be amazing, demure, and super duper
    freaking lucky. Once again, have an awesome fucking birthday, and to more
    type shit moments!
    <br />
    -Josh”
  </>,
];

const TheBumsHeader = ({ scrollToKai, scrollToJosh, scrollToRoy }) => {
  return (
    <header className="header">
      <div className="left-header">
        <p>The Bums</p>
        <nav className="scroll-down">
          <button className="scroll" onClick={scrollToKai}>
            kai
          </button>
          <button className="scroll" onClick={scrollToJosh}>
            josh
          </button>
          <button className="scroll" onClick={scrollToRoy}>
            kai
          </button>
        </nav>
      </div>
      <div className="links-container">
        <NavLink to="/" className="link">
          home
        </NavLink>
        <NavLink to="/namfam" className="link">
          nam fam
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
              strings={["The Bums"]}
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
