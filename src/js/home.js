import React from "react";
import { Navbar } from "./component/navbar.js";
import { Jumbotron } from "./jumbotron";
<<<<<<< HEAD:src/js/component/home.js
import { Card } from "./card";
//include images into your; bundle
import rigoImage from "../../img/rigo-baby.jpg";
=======
//include images into your bundle
>>>>>>> c34d95270675abacb1396656ad33d2303f25cbbf:src/js/home.js

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<Navbar />
				<Jumbotron />
				<Card />
			</div>
		);
	}
}
