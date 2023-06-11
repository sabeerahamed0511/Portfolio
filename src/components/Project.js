import React from "react";
import "../styles/project.css";

export default function Project() {

    return (
        <section id="project">
            <div id="project-container" >
                <h5 id="portfolio-heading">PORTFOLIO</h5>
                <h3>Each poject is a unique piece of development</h3>
                <p id="demo">
                    <span>Demo Id : </span>demo@gmail.com
                    <br/>
                    <span>Demo Password : </span>demo@123
                </p>
                <div className="each-project">
                    <div className="project-a">
                        <img src={require("../images/EVENT PROPOSAL.png")} />
                    </div>
                    <div className="project-b">
                        <h5>EVENT PROPOSAL</h5>
                        <p>
                            A event proposal website is an online platform that allows user to book event organiser for personal or business events. the website provides an interface for searching, comparing, and reserving event organizer.
                        </p>
                        <div className="project-links">
                            <a className="git-link" href="https://github.com/sabeerahamed0511/Event-Proposal-App" target="_blank">
                                Code
                                <span>
                                    <ion-icon name="logo-github"></ion-icon>
                                </span>
                            </a>
                            <a className="site-link" href="https://event-proposal-app-bqu7.onrender.com/" target="_blank">
                                Live Demo
                                <span>
                                    <i class="fa fa-external-link"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="each-project">
                    <div className="project-b">
                        <h5>INSTACLONE</h5>
                        <p>
                        Instaclone is a photo and video sharing social networking service platform. The app allows users to upload media that can be organized and deleted. Posts will be shared publicly with other users.
                        </p>
                        <div className="project-links">
                            <a className="git-link" href="https://github.com/sabeerahamed0511/Instaclone" target="_blank">
                                Code
                                <span>
                                    <ion-icon name="logo-github"></ion-icon>
                                </span>
                            </a>
                            <a className="site-link" href="https://instaclone-psi-five.vercel.app/" target="_blank">
                                Live Demo
                                <span>
                                    <i class="fa fa-external-link"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="project-a">
                        <img src={require("../images/INSTACLONE.png")} />
                    </div>
                </div>

                <div className="each-project">
                    <div className="project-a">
                        <img src={require("../images/MAKE A WISH.png")} />
                    </div>
                    <div className="project-b">
                        <h5>MAKE A WISH</h5>
                        <p>
                        A make a wish website is an online platform that allows user to gather birthday greetings for their loved one from friends and family. It allows user to delete inappropriate greetings.
                        </p>
                        <div className="project-links">
                            <a className="git-link" href="https://github.com/sabeerahamed0511/make-a-wish" target="_blank">
                                Code
                                <span>
                                    <ion-icon name="logo-github"></ion-icon>
                                </span>
                            </a>
                            <a className="site-link" href="https://make-a-wish-chi.vercel.app/" target="_blank">
                                Live Demo
                                <span>
                                    <i class="fa fa-external-link"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}