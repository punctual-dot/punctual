import React from "react";
import "./Jumbotron.css";

const Jumbotron = (props) => (
    <div className="container-fluid summary-header">
        <div className="row">
            <div className="col-sm-2">
            </div>
            <div className="col-sm-4 header-text">
                <img src="logo.png" className="logo" alt="logo" width="400" height="auto"></img>
                <p className="body-text"> An app that talks about periods the way we all want to. We arm you with information to help fuel your body in the best way (even on the crappiest of days). Enough chatter, login to get started </p>
            </div>
            <div className="col-sm-4">
                <img src="phone.png" className="iphone" alt="iphone" width="auto" height="500"></img>
            </div>
        </div>
    </div>
);

export default Jumbotron;
