import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ShootingStars from "../utils/ShootingStars.json";
import Telescope from "../utils/Telescope.json";

const Navbar = () => {
  return (
    <nav>
      <div className="desktop-nav">
        <div className="left-heading nav-sponsor">
          <div className="letter-container">
            <p>Eastern </p>
            <p>INDIA’S</p>
          </div>
          <div className="letter-container">
            <p>BIGGEST </p>
            <p>HACKATHON</p>
          </div>
        </div>

        <div className="nav-sponsor">
          <Link href="" target="">
            Sponsor Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
