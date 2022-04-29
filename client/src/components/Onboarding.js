
import "./Onboarding.css";
import NavBar from "./NavBar";
import img1 from "../images/graphic1.png";
import img2 from "../images/graphic2.png";
import img3 from "../images/graphic3.png";
import img4 from "../images/graphic4.png";
import img5 from "../images/graphic5.png";
import img6 from "../images/graphic6.png";
import Footer from "./Footer";
import React, { useState } from 'react'
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <NavBar />
            <h4 className="onboarding-header"> OUR SERVICES </h4>
            <h1 className="carousel-header"> How Resint Works</h1>
            <div className="carousel">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={img2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Start adding Applications</h3>
                            <p>Adding applications is made easier with Resint!</p>
                            <p>Go into your dashboard and click the plus button to start adding applications.</p>
                            <p>Fill out and submit the application form and check your dashboard.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={img5}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Chrome Extension</h3>
                            <p>Use your Chrome extension to record applications with one click.</p>
                            <h4>How to start using the Chrome extension</h4>
                            <p>Download Resint extension from the Chrome extension store.</p>
                            <p>In resint.com, select "Get Code" and paste the code into the key phrase field.</p>
                            <p>Click on the submit button.</p>
                            <p>You will now be able to add applications from any site directly from your Chrome extension!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Upcoming Features</h3>
                            <p>
                                Chrome extension will have the ability to add applications from LinkedIn with one click.
                            </p>
                            <p>
                                Stay tuned for upcoming updates!
                            </p>
                            <p>
                                -Resint team.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Footer />

        </>

    );
}


export default ControlledCarousel;