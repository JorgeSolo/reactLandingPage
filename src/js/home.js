import React from "react";
import { Navbar } from "./component/navbar.js";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./card2";
import { Footer } from "./footer";
//include images into your bundle

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<Navbar />
				<br />
				<Jumbotron />
				<br />
                <Cards />
                <br />
                <Footer />
			</div>
		);
	}
}
