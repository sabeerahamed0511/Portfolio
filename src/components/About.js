import React from "react";
import "../styles/about.css";

export default function About() {

    return (
        <section id="about">
            <div id="about-container">
                <div id="about-img-container">
                    <img src={require("../images/ABOUT.jpeg")} />
                </div>
                <div id="about-details">
                    <h5>ABOUT ME</h5>
                    <h2>A dedicated Full Stack Developer based in Chennai, India.</h2>
                    <p>
                        As a Junior Full Stack Developer, I possess an impressive arsenal of skills in HTML, CSS, Javascript, React Js, Node Js and MongoDB. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interface through writing clean, maintainable and optimized code and utilizing cutting edge development tools and techniques. I am also a team player who thrives in collabrating with cross-functional teams to produce outstanding web applications.
                    </p>
                </div>
            </div>
        </section>
    )
}