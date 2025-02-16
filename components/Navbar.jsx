import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ShootingStars from "../utils/ShootingStars.json";
import Telescope from "../utils/Telescope.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <a href="#home">
          <img src="/images/logo/hncc.png" alt="Hackatron" />
        </a>
      </div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <ul>
          <li className="nav-btn"><a href="#home" onClick={toggleMenu}>HOME</a></li>
          <li className="nav-btn"><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
          <li className="nav-btn"><a href="#venue" onClick={toggleMenu}>VENUE</a></li>
          <li className="nav-btn"><a href="#schedule" onClick={toggleMenu}>SCHEDULE</a></li>
          <li className="nav-btn"><a href="#prizes" onClick={toggleMenu}>PRIZES</a></li>
          <li className="nav-btn"><a href="#sponsors" onClick={toggleMenu}>SPONSORS</a></li>
          <li className="nav-btn"><a href="#faqs" onClick={toggleMenu}>FAQS</a></li>
          <li className="nav-btn"><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
        </ul>
      </div>

      <div className="logo1">
        <a href="#home">
          <img src="/images/logo/hackatron.png" alt="Hackatron" />
        </a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <span className="close-icon">✖</span>
        ) : (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
