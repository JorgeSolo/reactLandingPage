import React from "react";

//include images into your bundle

//create your first component
export class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.
					</p>
					<a href="#" className="btn btn-primary">
						Find Out More !
					</a>
				</div>
			</div>
		);
	}
}
