import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="registerH1">Sign Up</h1>
          <div className="divStyle">
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  placeholder="username"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="emil"
                  name="email"
                  placeholder="john@doe.com"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>
              <div className="form-group">
                <button className="btn btn-lg btn-primary btn-block">
                  Sign Up!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
