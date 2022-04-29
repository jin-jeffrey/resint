import React from "react";
import "./Footer.css";
import footerImage from "../images/footer.jpeg";

function Footer() {
    return (
        <div className="footer">
            <img className="footer-image" src={footerImage} alt="footer-image"/>
        </div>
    );
}

export default Footer;