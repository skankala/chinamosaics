import React, { Component } from "react";
import "./Login.scss";
import brand from "./brand.jpg";
import work from "./work.jpg";
class Login extends Component {
  render() {
    return (
      <div>
        <div className="picture">
          <img src={work} />
        </div>
        <div className="container">
          <input type="text/json" className="UserName" /> <br />
          <input type="text/json" className="Password" /> <br />
          <button className="button" onClick={() => this.login}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
