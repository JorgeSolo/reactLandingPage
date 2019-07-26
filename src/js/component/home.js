import React from "react";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
//include images into your; bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<Jumbotron />
				<Card />
			</div>
		);
	}
}
