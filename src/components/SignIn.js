import React from "react";

const Footer = () => {
  return (
    <div>
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
    </div>
  );
};

export default Footer;
