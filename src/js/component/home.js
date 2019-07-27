import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { card } from "./card";
import { card2 } from "./card2";
import { footer } from "./footer";
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
                <card/>
                <br/>
                <card2/>
                <br/>
                <footer/>
			</div>
		);
	}
}
