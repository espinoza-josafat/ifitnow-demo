import React from "react";
import ReactDOM from "react-dom";

/*import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faFacebook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";*/

//import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faAdjust } from '@fortawesome/free-solid-svg-icons';

//import { Button } from "reactstrap";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

//library.add(faAdjust);

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form className="form-signin">
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                    autofocus
                  />
                  <label for="inputEmail">Email address</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                  <label for="inputPassword">Password</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label" for="customCheck1">
                    Remember password
                  </label>
                </div>
                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Sign in
                </button>
                <hr className="my-4" />
                <button
                  className="btn btn-lg btn-google btn-block text-uppercase"
                  type="submit"
                >
                  <FontAwesomeIcon icon="google" /> Sign in with Google
                </button>
                <button
                  className="btn btn-lg btn-facebook btn-block text-uppercase"
                  type="submit"
                >
                  <FontAwesomeIcon icon="facebook" />
                  Sign in with Facebook
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
