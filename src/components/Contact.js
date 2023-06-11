import React from "react";
import "../styles/contact.css";

export default function Contact() {

    return (
        <section id="contact">
            <div id="contact-container">
                <h5 id="contact-header">
                    CONTACT
                </h5>
                <h3>
                    Don't be shy! Hit me up! <span>&#128071;</span>
                </h3>
                <div id="contact-details" >
                    <div className="each-detail">
                        <span className="detail-icon">
                            <ion-icon name="locate"></ion-icon>
                        </span>
                        <div>
                            <h5>
                                Location
                            </h5>
                            <p>
                                Chennai, India
                            </p>
                        </div>
                    </div>
                    <div className="each-detail">
                        <span className="detail-icon">
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <div>
                            <h5>
                                Mail
                            </h5>
                            <p>
                                sabeerahamed0511@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}