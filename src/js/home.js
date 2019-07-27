import React from "react";
import { Navbar } from "./component/navbar.js";
import { Jumbotron } from "./jumbotron";
import { Card } from "./component/card.js";
import { Card2 } from "./card2";
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
                <Card/>
                <br/>
                <Card2/>
                <br/>
                <Card/>
                <br/>
                <Card2/>
                <br/>
                <Footer/>
			</div>
		);
	}
}
