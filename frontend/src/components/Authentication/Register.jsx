import "./Authentication.css";
import Logo from "./fitConnectLogo.png";
import { NavLink, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";
import { useState } from "react";

function Register({signup, isAuthenticated}){
    const [formData, setFormData] = useState({email: "", name: "", password: "", re_password: ""});
    const [accountCreated, setAccountCreate] = useState(false);
    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currentData => {currentData[changedField] = newValue; return {...currentData}});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password === formData.re_password){
            signup(formData.name, formData.email, formData.password, formData.re_password);
            setAccountCreate(true);
            alert("Your account has been successfully created. Please check your email to activate your account.");
        }
    }
    if (isAuthenticated){
        return <Navigate to='/login'/>
    }

    if (accountCreated){
        return <Navigate to='/login'/>
    }
    return (
        <main className="login-grid">
            <div className="top-side">
                <img className="logo" src={Logo} alt="" />
                <h1 className="loginText">Register</h1>
            </div>
            <form onSubmit={handleSubmit} className="bottom-side">
                <input type="email" name="email" onChange={handleChange} required value={formData.email} placeholder="Email..."/>
                <input type="text" name="name" onChange={handleChange} required value={formData.fullName} placeholder="Full name..."/>
                <input type="password" name="password" onChange={handleChange} required value={formData.password} placeholder="Password..."/>
                <input type="password" name="re_password" onChange={handleChange} required value={formData.re_password} placeholder="Confirm password..."/>
                <button className="register-button">Register</button>
                <p className="Auth-text">Already have an account? <NavLink className="Auth-link" to="/login">Click here...</NavLink></p>
            </form>
        </main>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect (mapStateToProps, {signup})(Register);