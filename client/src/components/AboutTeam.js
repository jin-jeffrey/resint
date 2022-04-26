import React from "react";
import "./AboutTeam.css";
import NavBar from "./NavBar";

function AboutTeam() {
    return (
        <div id="row">
            <NavBar />
            <h1 class="about-header">
                Meet the team!
            </h1>
            <div id="column">
                <div class="card">
                    <div class="team-img">
                        <img src="img/team-2.jpg" alt="Team Image"></img>
                    </div>
                    <div class="team-content">
                        <h2>Jeffery Jin</h2>
                        <h3>Developer</h3>
                        <p>Senior, Computer Science @ Boston University</p>
                        <h4>@gmail.com</h4>
                    </div>
                </div>
            </div>
            <div id="column">
                <div class="card">
                    <div class="team-img">
                        <img src="img/team-3.jpg" alt="Team Image"></img>
                    </div>
                    <div class="team-content">
                        <h2>Dana Zheng</h2>
                        <h3>Developer</h3>
                        <p>Senior, Computer Science @ Boston University</p>
                        <h4>abc@gmail.com</h4>
                    </div>
                </div>
            </div>
            <div id="column">
                <div class="card">
                    <div class="team-img">
                        <img src="img/team-3.jpg" alt="Team Image"></img>
                    </div>
                    <div class="team-content">
                        <h2>Bernard Mulaw</h2>
                        <h3>Developer</h3>
                        <p>Senior, Computer Science @ Boston University</p>
                        <h4>abc@gmail.com</h4>
                    </div>
                </div>
            </div>
            <div id="column2">
                <div class="card">
                    <div class="team-img">
                        <img src="img/team-1.jpg" alt="Team Image"></img>
                    </div>
                    <div class="team-content">
                        <h2>Kolade Adegbaye</h2>
                        <h3>Team Lead</h3>
                        <p>Junior, Computer Science @ Boston University</p>
                        <h4>koladea@bu.edu</h4>
                    </div>
                </div>
            </div>
            <div id="column2">
                <div class="card">
                    <div class="team-img">
                        <img src="img/team-4.jpg" alt="Team Image"></img>
                    </div>
                    <div class="team-content">
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