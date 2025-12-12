// src/components/EmployeeDetails/index.js
import { Component } from "react";
import './index.css'

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "John",   
      email: "0000000000"
    };
  }

  componentDidMount() {
      const stored = localStorage.getItem("userData");
      if (stored) {
        const user = JSON.parse(stored);
        this.setState({
          fullname: user.name || this.state.fullname,
          email: user.email || this.state.email
        });
      } else {
        alert("No user found! Please register first.");
      }
    }
  

  render() {
    const { fullname, email } = this.state;

    return (
      <div className="main-container">
        <ul className="unordered-list">
          <li className="list-item">Home</li>
          <li className="list-item">About</li>
          <li className="list-item">Contact</li>
          <li className="list-item">Logout</li>
        </ul>

        <div className="second-container">
          <div className="employee-details-container">
            <h1 className="employee-heading">{fullname}</h1>

            <ul className="employee-unordered-list">
              <li className="list-item">Home</li>
              <li className="list-item">Work</li>
              <li className="list-item">Support</li>
              <li className="list-item">Settings</li>
              <li className="list-item">Signout</li>
            </ul>
          </div>

          <div className="details-container">
            <div className="about-container">
              <h1 className="about">About</h1>
              <h1 className="details">Full Name: {fullname}</h1>
              <hr className="horizontal-line"/>
              <h1 className="details">Work: Software Engineer</h1>
              <hr className="horizontal-line"/>
              <h1 className="details">Contact: {email}</h1>
              <hr className="horizontal-line"/>
              <h1 className="details">Location: India</h1>
            </div>

            <div className="project-container">
              <h1 className="details">Recent Projects</h1>
              <hr className="horizontal-line"/>
              <h1 className="details">Project: Description</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EmployeeDetails;
