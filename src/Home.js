import React, { useEffect, useState } from "react";
import { Browser as Router, NavLink } from "react-router-dom";

import profilePic from "./images/audge.png";

const Header = () => {
  return (
    <header className="header">
      <p>Audrey's 20th</p>
      <div className="links-container">
        <NavLink to="/namfam" className="link">
          nam fam
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

const Title = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [stopCursor1, setStopCursor1] = useState(false);
  const [stopCursor2, setStopCursor2] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const line1Timer = setTimeout(() => setShowLine1(true), 1000);
    const line2Timer = setTimeout(() => setShowLine2(true), 4200);
    const cursorStopTimer1 = setTimeout(() => setStopCursor1(true), 4150);
    const cursorStopTimer2 = setTimeout(() => setStopCursor2(true), 6100);
    return () => {
      clearTimeout(line1Timer);
      clearTimeout(line2Timer);
      clearTimeout(cursorStopTimer1);
      clearTimeout(cursorStopTimer2);
    };
  }, []);

  return (
    <div className="title-container">
      <div className="title">
        <p>
          {showLine1 && (
            <span
              className={`line1 ${showLine1 ? "animate-line1" : ""} ${
                stopCursor1 ? "cursor-off" : ""
              }`}
            >
              Happy Birthday
            </span>
          )}
          <br />
          {showLine2 && (
            <span
              className={`line2 ${showLine2 ? "animate-line2" : ""} ${
                stopCursor2 ? "cursor-off" : ""
              }`}
            >
              Audrey Chang!
            </span>
          )}
        </p>
      </div>
      <img
        src={profilePic}
        alt="audrey"
        className={`audrey ${isVisible ? "visible" : ""}`}
      />
    </div>
  );
};

const Home = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="body-container">
        <main className="main">
          <Title />
        </main>
      </div>
    </div>
  );
};

export default Home;
