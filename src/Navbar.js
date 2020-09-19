import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <div className="jumbotron">
          <h1 className="display-4">Find your next meal!</h1>
          <p className="lead">
            A useful website for discover new recipes.
          </p>
          <hr className="my-4" />
          <p>So what kind of food woud you like to make?</p>
          <p className="lead">
            <a className="btn btn-outline-dark" href="https://developer.edamam.com/edamam-docs-recipe-api" role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Navbar;
