
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
import Popper from 'popper.js';
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
            <h1 className="carousel-header"> How resint works </h1>
            <div className="carousel">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Start adding Applications</h3>
                            <p>Adding applications is made easier with resint.</p>
                            <p>go into your dashboard and click the plus button to start adding applications.</p>
                            <p>Fill out the application form and check your dashboard</p>
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
                            <p>Use your chrome extension to add applications directly without having to come to the website.</p>

                            <h4>How to start using the chrome extension</h4>
                            <p>Go to the google chrome extensions store and download resint extension .</p>
                            <p>In Resint.com, Click on get code, a code will be copied to your clipboard.</p>
                            <p>Paste the code into the key phrase field.</p>
                            <p>Click on the submit button.</p>
                            <p>You will be able to add applications directly from your chrome extension.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={img6}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Footer />
           
        </>

    );
}

// render(<ControlledCarousel />);

// function OnBoarding() {
//     return (
//         <>
//             <NavBar />
//             <CardGroup>
//                 <Card>
//                     <Card.Img variant="top" src={img2} />
//                     <Card.Body>
//                         <Card.Title>Card title</Card.Title>
//                         <Card.Text>
//                             This is a wider card with supporting text below as a natural lead-in to
//                             additional content. This content is a little bit longer.
//                         </Card.Text>
//                     </Card.Body>
//                     <Card.Footer>
//                         <small className="text-muted">Last updated 3 mins ago</small>
//                     </Card.Footer>
//                 </Card>
//                 <Card>
//                     <Card.Img variant="top" src={img3} />
//                     <Card.Body>
//                         <Card.Title>Card title</Card.Title>
//                         <Card.Text>
//                             This card has supporting text below as a natural lead-in to additional
//                             content.{' '}
//                         </Card.Text>
//                     </Card.Body>
//                     <Card.Footer>
//                         <small className="text-muted">Last updated 3 mins ago</small>
//                     </Card.Footer>
//                 </Card>
//                 <Card>
//                     <Card.Img variant="top" src={img5} />
//                     <Card.Body>
//                         <Card.Title>Card title</Card.Title>
//                         <Card.Text>
//                             This is a wider card with supporting text below as a natural lead-in to
//                             additional content. This card has even longer content than the first to
//                             show that equal height action.
//                         </Card.Text>
//                     </Card.Body>
//                     <Card.Footer>
//                         <small className="text-muted">Last updated 3 mins ago</small>
//                     </Card.Footer>
//                 </Card>
//             </CardGroup>
//             {/* <div className="card-deck">
//                 <div className="card">
//                     <img className="card-img-top" src={img2} alt="Card image cap"></img>
//                     <div className="card-body">
//                         <h5 className="card-title">Card title</h5>
//                         <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                     </div>
//                 </div>
//                 <div className="card">
//                     <img className="card-img-top" src={img3} alt="Card image cap"></img>
//                     <div className="card-body">
//                         <h5 className="card-title">Card title</h5>
//                         <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//                         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                     </div>
//                 </div>
//                 <div className="card">
//                     <img className="card-img-top" src={img4} alt="Card image cap"></img>
//                     <div className="card-body">
//                         <h5 className="card-title">Card title</h5>
//                         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//                         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                     </div>
//                 </div>
//             </div> */}
//             <Footer />
//         </>
//     )

// }



export default ControlledCarousel;