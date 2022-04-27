import React from "react";
import "./AboutTeam.css";
import NavBar from "./NavBar";
import jeff from "../images/jeff.png";
import dana from "../images/dana.png";
import kolade from "../images/lade.png";
import fiona from "../images/fiona.png";
import bernard from "../images/bernard.png";

function AboutTeam() {
    return (
        <div id="row">
            <NavBar />
            <h1 className="about-header">
                Meet the team!
            </h1>
            <div id="column">
                <div className="card">
                    <div className="team-img2">
                        <img src={jeff} alt="Team Image"></img>
                    </div>
                    <div className="team-content">
                        <h2>Jeffery Jin</h2>
                        <h3>Developer</h3>
                        <p>Senior, Computer Science @ Boston University</p>
                        <h4>@gmail.com</h4>
                    </div>
                </div>
            </div>
            <div id="column">
                <div className="card">
                    <div className="team-img2">
                        <img src={dana} alt="Team Image"></img>
                    </div>
                    <div className="team-content">
                        <h2>Dana Zheng</h2>
                        <h3>Developer</h3>
                        <p>Senior, Computer Science @ Boston University</p>
                        <h4>abc@gmail.com</h4>
                    </div>
                </div>
            </div>
            <div id="column">
                <div className="card">
                    <div className="team-img2">
                        <img src={bernard} alt="Team Image"></img>
                    </div>
                    <div className="team-content">
                        <h2>Bernard Mulaw</h2>
                        <h3>Developer</h3>
                        <p>Senior, Computer Science @ Boston University</p>
                        <h4>abc@gmail.com</h4>
                    </div>
                </div>
            </div>
            <div id="column2">
                <div className="card">
                    <div className="team-img2">
                        <img src={kolade} alt="Team Image"></img>
                    </div>
                    <div className="team-content">
                        <h2>Kolade Adegbaye</h2>
                        <h3>Team Lead/ Developer</h3>
                        <p>Junior, Computer Science @ Boston University</p>
                        <h4>koladea@bu.edu</h4>
                    </div>
                </div>
            </div>
            <div id="column2">
                <div className="card">
                    <div className="team-img2">
                        <img src={fiona} alt="Team Image"></img>
                    </div>
                    <div className="team-content">
                        <h2>Fiona Wada-gil</h2>
                        <h3>Designer</h3>
                        <p>Senior, Computer Science @ Boston University</p>
                        <h4>abc@gmail.com</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutTeam;