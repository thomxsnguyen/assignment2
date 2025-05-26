import React, { useEffect, useState, useRef } from "react";
import { Browser as Router, NavLink, useLocation } from "react-router-dom";
import { ReactTyped } from "react-typed";

import michelle from "./polaroids/michelle.png";
import noemi from "./polaroids/noemi.png";
import branden from "./polaroids/branden.png";
import ally from "./polaroids/ally.png";
import lauren from "./polaroids/lauren.png";
import hometown1 from "./polaroids/hometown1.png";
import hometown2 from "./polaroids/hometown2.png";

const message = [
  <>
    Acrostic poem for Audrey
    <br />
    <br />
    A- Awesome at everything
    <br />
    U- Unbelievably intelligent
    <br />
    D- Drop dead gorgeous
    <br />
    R- Rizzmaster 3000
    <br />
    E- Exceptional dancer
    <br />
    Y- You have been such an important presence in my life for the past eight
    years and I don’t know what I would do without you. I hope your birthday is
    just as special as you#Youaresoold #20 #missyouqueen
  </>,
  <>
    HAPPY FREAKING BIRTHDAY AUDREY! Welcome to the 20s :D I hope you have an
    amazing birthday! Thank you for being an amazing friend. I love and miss you
    lots! Also we needa hang out soon lol💕
  </>,
  <>
    Happy Birthday 아줌마!
    <br />
    <br />
    We've known each other too long to the point that I can't afford falling out
    of your good graces in fear that you'll expose my stupidity to others. My
    peace offering for the year is my continued, amazing friendship and $20 that
    you will receive on May 18. Besides that, thanks for always being a chiller
    & for introducing me to Thomas. Hope you have a good birthday!
    <br />
    –Branden
  </>,
  <>
    Happy birthday to my lovely Audrey 💖💖💖
    <br />
    <br />
    Big 20!!! Im so happy that we’re making it to our twenties together.. who
    knew a random girl in my calc class could be one of my best friends today…
    even though we are separated by many miles most of the time, ur one of the
    ppl I can always count on to be there for me. I love yapping with u so so
    much. We’re going to be friends for a long long time.
    <br />
    <br />
    Ur so supportive, but also honest and real. I trust u with my life. Ur smart
    and dedicated and passionate, and good at literally everything u do!! I’m
    always impressed by u. Beauty and brains 😻 and u always make me laugh. Who
    got me smiling at my phone.. literally u 🤣
    <br />
    <br />
    I’m very excited for what 20 has in store for u. Ur going to do some big
    things!! Can’t wait to hear about ur Korea adventures, but ofc gonna force u
    to hang out w me all summer that ur still here. Love u so much and enjoy ur
    day🥰🥰
    <br />
    <br />
    Love
    <br />
    Ally
  </>,
  <>
    HAPPY BIG TWENTYYYY AUDGEEEEEE @always._.audrey 😚 Love u forever and ever
    and ever bestfriend ❤️ I can't believe I've known u since baby middle school
    audge at the beginning of ur teen yrs when u were lit teaching me
    calligraphy during lunch 🤣 and then we went thru like a breakup and I wrote
    u a breakup letter at like 2 am and now it's alr the end of ur teensssss I'm
    so excited for our early twenties tgt, for our long distance relationship to
    end, and to go thru the rest of life w u and travel everywhere and
    eventually become wine mommies and the auntie to ur children. Ur so
    beautiful and kind hearted and photogenic and sexy and sweet and ull be my
    soft girl k-baddie forever. I'm so excited for u to become a big influencer
    so u can take me to influencer events and sponsored brand trips; js switch
    ur content from couples content to more thirst traps to give ur followers
    what they acc wanna see- aka what Id rather see🤣 U make life so fun and
    worth living and I can't or don't wanna ever imagine what life would've been
    like without u in it. Thank u for ur kindness, being blunt when no one else
    would, our cuddles, always being so cautious of my health and making sure I
    don't die😭, your advice, being such great company any time of day, singing
    -screaming- in the car, and for always being such an amazing friend❤️
    There's no one else I'd rather have in my car than u and I'll drive to u
    wherever u r no matter how far or what time cuz ull always be my num one
    passenger princess 😚 Even tho we live like ten thousand miles away from
    each other for the majority of the year im always js a text or ft away if u
    ever js wanna rant or talk abt anything❤️ Luv u audge and life is js
    starting !!!! So excited to see what u accomplish and watch u become
    successful in every aspect of life cuz u deserve everything life has to
    offer. Ur so beautiful inside and out and im so blessed to be ur close
    friend. Happiest of bdays to u my beloved pookie bear ❤️❤️❤️ PARTY IT UP!!
    HERES TO UR TWENTIES 🥂
    <br />
    Love, oms
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
