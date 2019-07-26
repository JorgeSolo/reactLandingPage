import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
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
			</div>
		);
	}
}
