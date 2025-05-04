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
            <FooterContainer></FooterContainer>
            <FooterObj></FooterObj>
        </>
    )

}

export default Footer;