import React, { useState } from "react";
import "../styles/home.css";

export default function Home() {
    const [boo, setBoo] = useState(false);
    return (
        <section id="home-container">
            <header id="header">
                <h3 id="name">
                    Sabeer.dev
                </h3>
                <nav id="nav-elements">
                    <span id="menu-btn" onClick={() => setBoo(pre => !pre)}><ion-icon name="menu"></ion-icon></span>
                    {
                        boo &&
                        <ul id="for-mobile" onClick={() => setBoo(false)}>
                            <li>
                                <a href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#project">
                                    Project
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    }
                    <ul id="for-pc">
                        <li>
                            <a href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#project">
                                Project
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div id="home">
                <div id="intro">
                    <div id="intro-a">
                        <h1>
                            Full Stack Developer<span id="hand-sign">&#128075;</span>
                        </h1>
                        <p>
                            Hi, I'm Sabeer Ahamed, A passionate Full Stack Developer specialized in MERN Stack based in Chennai, India.
                        </p>
                        <div id="links">
                            <div className="link-img-container">
                                <a href="https://www.linkedin.com/in/sabeer-ahamed-r-401b62231/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                            </div>
                            <div className="link-img-container">
                                <a href="https://github.com/sabeerahamed0511" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
                            </div>
                        </div>
                    </div>
                    <div id="intro-b">
                        <img src={require("../images/profilePic.jpg")} />
                    </div>
                </div>
                <div id="techs-container">
                    <h4 id="techs-header">Tech Stack</h4>
                    <div className="tech-img-conatiner">
                        <img src={require("../images/HTML.png")} alt="NA" />
                    </div>
                    <div className="tech-img-conatiner">
                        <img src={require("../images/CSS.png")} alt="NA" />
                    </div>
                    <div className="tech-img-conatiner">
                        <img src={require("../images/JS.png")} alt="NA" />
                    </div>
                    <div className="tech-img-conatiner">
                        <img src={require("../images/REACT.png")} alt="NA" />
                    </div>
                    <div className="tech-img-conatiner">
                        <img src={require("../images/NODE.png")} alt="NA" />
                    </div>
                    <div className="tech-img-conatiner">
                        <img src={require("../images/MONGODB.jpg")} alt="NA" />
                    </div>
                    <div className="tech-img-conatiner">
                        <img src={require("../images/GITHUB.png")} alt="NA" />
                    </div>
                </div>
            </div>
        </section>
    )
}