import React from "react";
import "./Footer.css";
import footerImage from "../images/footer.jpeg";

function Footer() {
    return (
        <div className="footer">
            <img className="footer-image" src={footerImage}></img>
        </div>
    );
}

export default Footer;