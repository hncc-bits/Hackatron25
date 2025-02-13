// What is Hackatron -> WIHTS
import { infoConfig } from "../../config/info";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Wihts = () => {
  const { wihts } = infoConfig;
  const { Hackathon } = infoConfig;
  return (
    <section
      className="section about-section wow animate__animated animate__fadeInUp"
      data-wow-duration="1s"
      id="wihts"
    >
      <div className="abbox">
        <h2 className="section-title">WHAT IS HACKATRON?</h2>
        <div className="paraDiv" style={{ zIndex: 100 }}>
          {wihts.map((d, index) => (
            <React.Fragment key={d.id}>
              <br key={index} />
              <p key={d.id}>{d.data}</p>
            </React.Fragment>
          ))}
          <p>
            {Hackathon.data}
            <Link target="_blank" href={Hackathon.link}>
              here...
            </Link>
          </p>

          <div className="frm">
            <img
              src="/images/images/pinkPlanet.png"
              alt="Hackatron Hackathon planet"
            />
          </div>
          <div className="asrt">
            <img
              src="/images/images/astronaut.png"
              alt="Hackatron Hackathon planet"
            />
          </div>
        </div>
      </div>
     
      <div className="pattern2">
        <Image
          src="/images/pattern6.svg"
          alt="Hackatron const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default Wihts;
