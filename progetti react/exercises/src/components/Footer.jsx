import React from "react";
import FooterWrapper from "./FooterWrapper";
import FooterContainer from "./FooterContainer";
import FooterObj from "./FooterObj";



const Footer = () => {
    return (
        <>

            <FooterWrapper>
                <h1 className="f-wrapper m-container">Aquatic Paradise</h1>
                <img src="../../public/images/logosara.png" className="logo" alt="logotop" />
                <p className="slogan">ten years in one click </p>
            </FooterWrapper>
            <FooterContainer>
                <li className="grid-container"> 
             <p className="div-button">
             Leave a review!
             </p>
             <p>
             Latest news:
             </p>
             <p>
             They say about us:
             </p>
                </li>
            </FooterContainer>
            <FooterObj></FooterObj>
        </>
    )

}

export default Footer;