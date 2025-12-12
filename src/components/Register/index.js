import { Component } from "react";
import './index.css'

class Register extends Component {

    handleRegister = () => {
        const name = document.getElementById("regName").value;
        const email = document.getElementById("regEmail").value;
        const pass = document.getElementById("regPassword").value;

        const user = { name, email, pass };

        localStorage.setItem("userData", JSON.stringify(user));

        alert("Registered Successfully!");
        window.location.href = "/";
    }

    render(){
        return(
            <div className="register-background">
                <h1 className="register-heading">Register yourself here!</h1>
                <div className="register-card">

                    <p className="register-text">Full name</p>
                    <input id="regName" className="input-style" type="text" placeholder="Enter your name"/>

                    <p className="register-text">Email</p>
                    <input id="regEmail" className="input-style" type="email" placeholder="Enter you mail id"/>

                    <p className="register-text">Password</p>
                    <input id="regPassword" className="input-style" type="password" placeholder="Enter your password"/>

                    <br/>

                    <button 
                      className="register-button" 
                      type="button"
                      onClick={this.handleRegister}
                    >
                      Register
                    </button>

                </div>
            </div>
        )
    }
}

export default Register;
