import React from "react";
import "./Onboarding.css";
import NavBar from "./NavBar";

function OnBoarding() {
    return (
        <div className="onboard">
            < NavBar />
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
                        <h2>How to use Resint</h2>
                        <p>Create a resint account to get started and begin tracking applications!<br></br></p>
                        <p>Step 1: Access your dashboard by navigating to the home button on the navbar </p>
                        <p>Step 2: Add an application by clicking the plus button on the top right of your dashboard </p>
                        <p>Step 3: Add application details and you are good to go! </p>
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
                {/* <aside className="carousel__navigation">
                    <ol className="carousel__navigation-list">
                        <li className="carousel__navigation-item">
                            <a href="#carousel__slide1"
                                className="carousel__navigation-button"></a>
                        </li>
                        <li className="carousel__navigation-item">
                            <a href="#carousel__slide2"
                                className="carousel__navigation-button"></a>
                        </li>
                        <li className="carousel__navigation-item">
                            <a href="#carousel__slide3"
                                className="carousel__navigation-button"></a>
                        </li>
                        <li className="carousel__navigation-item">
                            <a href="#carousel__slide4"
                                className="carousel__navigation-button"></a>
                        </li>
                    </ol>
                </aside> */}
            </div>
        </div>
    );

}

export default OnBoarding;