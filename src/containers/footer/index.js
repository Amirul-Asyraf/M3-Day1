import React from "react";
import Rlogo from "../../logo.svg";
import "./footer.css";

class Footer extends React.Component {
    render () {
        return (
            <footer>
                <div class="container">
                    <ul>
                        <img src={Rlogo} alt="logo" height={40}/>
                        <li class="desc">financial transactions remotely using a mobile device such as a smartphone and tablet</li>
                    </ul>
                    <ul>
                        <h5>Besnik</h5>
                        <li>About</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>How It Works</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <h5>Legal</h5>
                        <li>Support Career</li>
                        <li>24hr Service</li>
                        <li>Quick Chat</li>
                    </ul>
                    <ul>
                        <h5>Contact</h5>
                        <li>Whatsapp</li>
                        <li>Support 24/7</li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;