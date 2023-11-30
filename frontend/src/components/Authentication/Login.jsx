import "./Authentication.css";
import Logo from "./fitConnectLogo.png";
import { NavLink, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { login } from "../../actions/auth";

function Login({login, isAuthenticated}){
    const [formData, setFormData] = useState({email: "", password: ""});
    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currentData => {currentData[changedField] = newValue; return {...currentData}});
    };
    const handleSubmit =(e) => {
        e.preventDefault();
        login(formData.email, formData.password);
        setFormData({email: "", password: ""})
    };
    if (isAuthenticated){
        return <Navigate to='/menu'/>;
    }
    return (
        <main className="login-grid">
            <div className="top-side">
                <img className="logo" src={Logo} alt="" />
                <h1 className="loginText">Login</h1>
            </div>
            <form onSubmit={handleSubmit} className="bottom-side">
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email..."/>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Password..."/>
                <button className="login-button">Login</button>
                <p className="Auth-text">Need an account? <NavLink className="Auth-link" to="/">Click here...</NavLink></p>
                <p className="Auth-text">Forgot your password? <NavLink className="Auth-link" to="/reset_password">Click here...</NavLink></p>
            </form>
        </main>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(Login);