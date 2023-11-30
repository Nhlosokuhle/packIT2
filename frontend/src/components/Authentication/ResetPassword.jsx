import "./Authentication.css";
import Logo from "./fitConnectLogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { reset_password } from "../../actions/auth";

function ResetPassword({reset_password}){
    const navigate = useNavigate();
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({email: ""});
    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currentData => {currentData[changedField] = newValue; return {...currentData}});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        reset_password(formData.email);
        setRequestSent(true);
    };
    if (requestSent){
        alert("Check your email address!");
        navigate('/login');
    }
    return (
        <main className="login-grid">
            <div className="top-side">
                <img className="logo" src={Logo} alt="" />
                <h1 className="loginText">Reset Password</h1>
            </div>
            <form onSubmit={handleSubmit} className="bottom-side">
                <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email..." required/>
                <button className="rst-button">Reset Password</button>
                <p className="Auth-text">Return to the previous page? <NavLink className="Auth-link" to="/login">Click here...</NavLink></p>
            </form>
        </main>
    );
}

export default connect(null, {reset_password})(ResetPassword);