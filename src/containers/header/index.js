import React from "react";
import Rlogo from "../../logo.svg";
import "./header.css";

class Header extends React.Component {
    render () {
        return (
            <header>
                <img src={Rlogo} alt="logo" height={80}/>
                <nav>
                    <ul>
                        <li><a href="#home">Business</a></li>
                        <li><a href="#about">Pricing</a></li>
                        <li><a href="#contact">Features</a></li>
                        <li><a href="#work">About</a></li>
                    </ul>
                </nav>

                <ul>
                    <li>Login</li>
                    <li><button>Sign Up</button></li>
                </ul>
            </header>
        );
    }
}

export default Header;