import React from "react";
import "./Jumbotron.css";

const Jumbotron = (props) => (

<div className="container-fluid">
			<div className="row">
				<div className="col-sm-2">
				</div>
				<div className="col-sm-4 header-text">
					<img src="logo.png" className="logo" alt="logo" width="400" height="auto"></img>
					<p className="body-text"> An app that talks about periods the way we all want to. We give you resources to feeling your best on the crappiest of days.</p>
				</div>

				<div className="col-sm-4">
				    <img src="phone.png" className="iphone" alt="iphone" width="auto" height="500"></img>
				</div>
			</div>
</div>

/*  <div className="container-fluid">
    <div class="row">
            <div class="col-md-4">
                <img src="phone.png" class="img-rounded"></img>
                <p> test</p>
            </div>
            <div class="col-md-8">
                <div class="page-header">
                    <h2> Hybridisation Recombination and Introgression Detection and Dating </h2>
                    <p> <h2> <small> Easy detection, dating, and visualisation for recombination, introgression and hybridisation events in genomes. </small> </h2> </p>
                </div>
            </div>
        </div>
  </div>
*/  
);



export default Jumbotron;
