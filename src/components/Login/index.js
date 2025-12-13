import { Component } from "react";
import './index.css'
import { Link } from "react-router-dom";

class Login extends Component {

    handleLogin = () => {
        const name = document.getElementById("loginName").value;
        const pass = document.getElementById("loginPassword").value;

        const savedUser = JSON.parse(localStorage.getItem("userData"));

        if (!savedUser) {
            alert("No user found! Please register first.");
            window.location.href = "/register";
            return;
        }

        if (savedUser.name === name && savedUser.pass === pass) {
            alert("Login Successful!");
            window.location.href = "/employee";
        } else {
            alert("Invalid Name or Password");
        }
    }

    render() {  
        return (
            <div className="main-background">
                <h1 className="login-heading">Welcome to login page</h1>
                <div className="login-card">

                    <p className="login-text">User name</p>
                    <input id="loginName" className="input-style" type="text"  placeholder="Enter your name"/>

                    <p className="login-text">Password</p>
                    <input id="loginPassword" className="input-style" type="password"  placeholder="Enter your password"/>

                    <br/>

                   <Link to={"/employee"}> <button className="login-button" type="button"onClick={this.handleLogin}>
                        Login
                    </button></Link>

                    <div>
                        <p>Forgot Password?</p>
                        <br/>
                        <a href="/register">Register here</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Login;
