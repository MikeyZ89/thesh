import React from "react";
import "../App.css";
import THESH from "../assets/img/logos/theshblue.png";

function Header() {
  return (
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          
          <img className="LOGO" src={THESH} alt={THESH} />
          {/* <br></br>
          <div className="intro-lead-in">ALBUM COMING SOON</div>
          
          <div className="intro-heading text-uppercase">THESH</div>
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#services"
          >
            BUY NOW!
          </a> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
