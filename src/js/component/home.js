import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import { Footer } from "./footer";
//include images into your bundle

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Jumbotron />
				<Cards />
				<Footer />
			</React.Fragment>
		);
	}
}
