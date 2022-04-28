import React from "react";
import "./Onboarding.css";
import NavBar from "./NavBar";
import img1 from "../images/graphic1.png";
import img2 from "../images/graphic2.png";
import img3 from "../images/graphic3.png";
import img4 from "../images/graphic4.png";
import img5 from "../images/graphic5.png";
import img6 from "../images/graphic6.png";
import Footer from "./Footer";

function OnBoarding() {
    return (
        <>
            < NavBar />
            <div className="onboard">

                <h1 className="resint">Resint Onboarding</h1>
                <div className="carousel" aria-label="Gallery">
                    <ol className="carousel__viewport">
                        <li id="carousel__slide1"
                            tabindex="0"
                            className="carousel__slide">
                            <br></br>
                            <h2>How to use Resint</h2>
                            <p>Create a resint account to get started and begin tracking applications!<br></br></p>
                            <p>Step 1: Access your dashboard by navigating to the home button on the navbar </p>
                            <p>Step 2: Add an application by clicking the plus button on the top right of your dashboard </p>
                            <p>Step 3: Add application details and you are good to go! </p>
                            <img src={img1} alt="Team Image"></img>
                            <div className="carousel__snapper">
                                <a href="#carousel__slide4"
                                    className="carousel__prev">Go to last slide</a>
                                <a href="#carousel__slide2"
                                    className="carousel__next">Go to next slide</a>
                            </div>
                        </li>
                        <li id="carousel__slide2"
                            tabindex="0"
                            className="carousel__slide">
                            <br></br>
                            <h2>Introducing Resint Chrome Extension</h2>
                            <p>Create a resint account to get started and begin tracking applications!<br></br></p>
                            <p>Step 1: Access your dashboard by navigating to the home button on the navbar </p>
                            <p>Step 2: Add an application by clicking the plus button on the top right of your dashboard </p>
                            <p>Step 3: Add application details and you are good to go! </p>
                            <img src={img2} alt="Team Image"></img>
                            <div className="carousel__snapper">
                                <a href="#carousel__slide1"
                                    className="carousel__prev">Go to previous slide</a>
                                <a href="#carousel__slide3"
                                    className="carousel__next">Go to next slide</a>
                            </div>
                        </li>
                        <li id="carousel__slide3"
                            tabindex="0"
                            className="carousel__slide">
                            <br></br>
                            <h2>How to use Resint</h2>
                            <p>Create a resint account to get started and begin tracking applications!<br></br></p>
                            <p>Step 1: Access your dashboard by navigating to the home button on the navbar </p>
                            <p>Step 2: Add an application by clicking the plus button on the top right of your dashboard </p>
                            <p>Step 3: Add application details and you are good to go! </p>
                            <img src={img3} alt="Team Image"></img>
                            <div className="carousel__snapper">
                                <a href="#carousel__slide2"
                                    className="carousel__prev">Go to previous slide</a>
                                <a href="#carousel__slide4"
                                    className="carousel__next">Go to next slide</a>
                            </div>

                        </li>
                        <li id="carousel__slide4"
                            tabindex="0"
                            className="carousel__slide">
                            <br></br>
                            <h2>How to use Resint</h2>
                            <p>Create a resint account to get started and begin tracking applications!<br></br></p>
                            <p>Step 1: Access your dashboard by navigating to the home button on the navbar </p>
                            <p>Step 2: Add an application by clicking the plus button on the top right of your dashboard </p>
                            <p>Step 3: Add application details and you are good to go! </p>
                            <div className="carousel__snapper"><a href="#carousel__slide3"
                                className="carousel__prev">Go to previous slide</a>
                                <a href="#carousel__slide1"
                                    className="carousel__next">Go to first slide</a></div>

                        </li>
                    </ol>
                </div>

            </div>
            <Footer />
        </>

    );

}

export default OnBoarding;