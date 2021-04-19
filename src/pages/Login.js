import React, { Component } from "react";
import "./login.css";
import image from "../image/img.jpg";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";
import RegisterModal from "./Register";
import EmailModal from "./Email";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerModal: false,
      emailModal: false,
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch("http://192.168.1.105:3000/ru/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value,
      }),
    })
      //.then(res=>res.json())
      .then(async (res) => {
        console.log("res::", res);
        if (res.statusText === "OK") {
          await alert("Login Successfully");
        } else {
          alert("Not Matched");
        }
      })
      .catch((err) => {
        console.log("Error::", err);
        alert("Some Thing Went Wrong");
      });
  }
  render() {
    let registerModalClose = () => this.setState({ registerModal: false });
    let emailModalClose = () => this.setState({ emailModal: false });
    return (
      <div>
        <div className="main">
            <div className="l-form">
              <form className="form"  onSubmit={this.handleSubmit}>
              <div className="backbutton-logo" >
                <i className='fas fa-arrow-left' onClick={this.props.history.goBack}/>
            </div>
                <div className="logo">
                  <img src={logo}></img>
                  <p className="name">Mr.Mechenic</p>
                </div>
                <h1 className="form_title">Login</h1>
                <div className="form_div">
                  <input
                    type="text"
                    className="form_input"
                    placeholder=""
                    name="username"
                  ></input>
                  <label className="form_lable">Username</label>
                </div>
                <div className="form_div">
                  <input
                    type="password"
                    className="form_input"
                    placeholder=""
                    name="password"
                  ></input>
                  <label className="form_lable">Password</label>
                </div>
                <button
                  type="submit"
                  className="form_button"
                 
                >
                  Login
                </button>
                <div className="link">
                  <p>
                    <Link
                      onClick={() => this.setState({ registerModal: true })}
                    >
                      If you dont have account Register
                    </Link>
                    <RegisterModal
                      show={this.state.registerModal}
                      onHide={registerModalClose}
                    />
                  </p>
                </div>
                <div className="link2">
                  <Link onClick={() => this.setState({ emailModal: true })}>
                    Forgot Password
                  </Link>
                  <EmailModal
                    show={this.state.emailModal}
                    onHide={emailModalClose}
                  />
                </div>
              </form>
          <div className="image">
            <img src={image} alt="mech"></img>
          </div>
          </div>
            </div>
        </div>
    );
  }
}

export default Login;
