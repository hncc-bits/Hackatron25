import React from "react";
import { TextContainer, WordGradient, VenueText, StyledButton, titleWords, cont, imga } from "./GradientTextStyles.js";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import styled, { keyframes } from "styled-components";



const arrowani = keyframes`
    10%{
        transform: translateY(7px);
    }
`;

const GradientText = () => {
  return (
    <>
      <TextContainer>
        {titleWords.map((word, index) => (
          <WordGradient key={index} $startColor={word.startColor} $endColor={word.endColor} $delay={word.delay}>
            {word.text}
          </WordGradient>
        ))}
      </TextContainer>

      <VenueText>
        BIT SINDRI-DHANBAD <br />
        JHARKHAND, INDIA
      </VenueText>
        
        
      <div style={{textAlign: "center", marginTop: "25px", display: "flex"}}>
        <StyledButton>Register Now</StyledButton>
        <div className="Arrow">
          <img className ="imga" src="images/arrow.png" alt="" style={{animation : "${key} 3s easse out infinite"}} />
        </div>
      </div>
    </>
  );
};

export default GradientText;
` `