import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 496) {
      handleshow(true);
    } else {
      handleshow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="navbar">
        <img
          className="nav__content"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        {/* <img
          className="nav__logo"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default Nav;
