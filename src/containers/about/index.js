import React from "react";
import imageCards from "../../images/image-cards.jpg";
import "./about.css";

class About extends React.Component {
    render() {
        return (
            <div id="about" className="section">
                <div class="works">
                    <h1>How it works</h1>
                    <h3>Mobile banking differs from mobile payments, which involve the use of a mobile device</h3>
                </div>
                <div>
                    <img src={imageCards} alt="cards"/>
                </div>
                <div class="container-cards">
                    <div class="card">
                        <h2>Information</h2>
                        <h4>Enter your information ensure your details are safe and more secure</h4>
                    </div>
                    <div class="card">
                        <h2>Data Secure</h2>
                        <h4>Sending money faster & easier with end to end encryption</h4>
                    </div>
                    <div class="card">
                        <h2>Add Cards</h2>
                        <h4>Add multiple cards and track your daily expense with quality interface</h4>
                    </div>
                </div>

            </div>
        )
    }
}

export default About;