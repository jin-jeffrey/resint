
import "./Onboarding.css";
import NavBar from "./NavBar";
import img1 from "../images/graphic1.png";
import img2 from "../images/graphic2.png";
import img3 from "../images/graphic3.png";
import img4 from "../images/graphic4.png";
import img5 from "../images/graphic5.png";
import img6 from "../images/graphic6.png";
import Footer from "./Footer";
import React from 'react'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function OnBoarding() {
    $('.carousel').carousel({
        interval: 2000
    });
    return (
        <>
            <NavBar />
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={img2} alt="First slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img3} alt="Second slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img4} alt="Third slide"></img>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <Footer />
        </>
    )
   
}



export default OnBoarding;