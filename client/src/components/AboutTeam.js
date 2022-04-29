import React from "react";
import "./AboutTeam.css";
import NavBar from "./NavBar";
import jeffimg from "../images/jeff.png";
import danaimg from "../images/dana.png";
import bernardimg from "../images/bernard.png";
import ladeimg from "../images/lade.png";
import fionaimg from "../images/fiona.png";
import Footer from "./Footer";


function AboutTeam() {
    return (
        <>
            <NavBar />
            <div id="row">

                <h1 className="about-header">
                    Meet the team!
                </h1>
                <div id="column">
                    <div className="card_about">
                        <div className="team-img2">
                            <img src={jeffimg} alt="jeff-image"/>
                        </div>
                        <div className="team-content">
                            <h2>Jeffrey Jin</h2>
                            <h3>Developer</h3>
                            <p>Senior, Computer Science @ Boston University</p>
                            <h4>jinjeff2@gmail.com</h4>
                        </div>
                    </div>
                </div>
                <div id="column">
                    <div className="card_about">
                        <div className="team-img2">
                            <img src={danaimg} alt="dana-image"/>
                        </div>
                        <div className="team-content">
                            <h2>Dana Zheng</h2>
                            <h3>Developer</h3>
                            <p>Senior, Computer Science @ Boston University</p>
                            <h4>daynah@bu.edu</h4>
                        </div>
                    </div>
                </div>
                <div id="column">
                    <div className="card_about">
                        <div className="team-img2">
                            <img src={bernardimg} alt="bernard-image"/>
                        </div>
                        <div className="team-content">
                            <h2>Bernard Mulaw</h2>
                            <h3>Developer</h3>
                            <p>Senior, Computer Science @ Boston University</p>
                            <h4>bmulaw@bu.edu</h4>
                        </div>
                    </div>
                </div>
                <div id="column2">
                    <div className="card_about">
                        <div className="team-img2">
                            <img src={ladeimg} alt="lade-image"/>
                        </div>
                        <div className="team-content">
                            <h2>Kolade Adegbaye</h2>
                            <h3>Team Lead/Developer</h3>
                            <p>Junior, Computer Science @ Boston University</p>
                            <h4>koladea@bu.edu</h4>
                        </div>
                    </div>
                </div>
                <div id="column2">
                    <div className="card_about">
                        <div className="team-img2">
                            <img src={fionaimg} alt="fiona-image"/>
                        </div>
                        <div className="team-content">
                            <h2>Fiona Wada-gil</h2>
                            <h3>Designer</h3>
                            <p>Senior, Graphic Design @ Boston University</p>
                            <h4>fawadag@bu.edu</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}

export default AboutTeam;