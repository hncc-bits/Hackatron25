import React from "react";
import { TextContainer, WordGradient, VenueText, StyledButton, titleWords, cont, imga } from "./GradientTextStyles.js";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import styled, { keyframes } from "styled-components";
// import RegisterSection from "./RegisterSection.js";




const GradientText = () => {
  return (
    <>

<div className="logo-container">
  <div className="logo-part">
    <img className="hack-logo" src="images/hack.jpg" alt="Hack Logo"/>
  </div>
  
  <div className="mascot-container">
    <div className="mascot-wrapper">
      <img className="mascot-img" src="images/mascot.jpg" alt="Mascot"/>
    </div>
  </div>
  
  <div className="logo-part">
    <img className="hack-logo" src="images/tron.jpg" alt="Tron Logo"/>
  </div>
</div>

      <div style={{
        paddingTop: "60px"
      }}>
      <TextContainer>
        {titleWords.map((word, index) => (
          <WordGradient key={index} $startColor={word.startColor} $endColor={word.endColor} $delay={word.delay}>
            {word.text}
          </WordGradient>
        ))}
      </TextContainer>
      </div>
      {/* <RegisterSection/> */}
    </>
  );
};

export default GradientText;
` `