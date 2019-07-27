import React from "react";
export class Navbar extends React.Component {
	render() {
		return (
			<React.Fragment>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container">
						<a className="navbar-brand" href="#">
							Start Bootstrap
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse justify-content-end"
							id="navbarNavAltMarkup">
							<div className="navbar-nav">
								<a
									className="nav-item nav-link active"
									href="#">
									Home{" "}
									<span className="sr-only">(current)</span>
								</a>
								<a className="nav-item nav-link" href="#">
									About
								</a>
								<a className="nav-item nav-link" href="#">
									Services
								</a>
								<a
									className="nav-item nav-link"
									href="#"
									tabIndex="-1"
									aria-disabled="true">
									Contact
								</a>
							</div>
						</div>
					</div>
				</nav>
			</React.Fragment>
		);
	}
}
