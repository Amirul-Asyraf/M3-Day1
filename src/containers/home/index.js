import React from "react";
import appPreview from "../../images/app-preview.jpg";
import "./home.css";

class Home extends React.Component {
    render() {
        return (
            <div id="home" className="section">
                <div id="container">
                    <div class="container-content">
                        <h3>30 Days free trial</h3>
                        <h1>Life Should Be Easy</h1>
                        <h3>Financial transactions remotely using a mobile device such as a smartphone or tablet.</h3>
                        <button>Get Started</button>
                    </div>

                    <div class="container-image">
                        <img src={appPreview} alt="preview"/>
                    </div>
                </div>

                
                
            </div>
        );
    }
}

export default Home;