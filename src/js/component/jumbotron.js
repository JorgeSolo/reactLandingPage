import React from "react";
export class Jumbotron extends React.Component {
	render() {
		return (
			<div className="container mt-3">
				<div className="jumbotron">
					<h1 className="display-4">A Warm Welcome!</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Ipsa, ipsam, eligendi, in quo sunt possimus non
						incidunt odit vero aliquid similique quaerat nam nobis
						illo aspernatur vitae fugiat numquam repellat.
					</p>
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Call to action!
					</a>
				</div>
			</div>
		);
	}
}
