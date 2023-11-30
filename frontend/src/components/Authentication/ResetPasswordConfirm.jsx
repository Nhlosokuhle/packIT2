import "./Authentication.css";
import Logo from "./fitConnectLogo.png";
import { Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { reset_password_confirm } from "../../actions/auth";

function ResetPasswordConfirm({reset_password_confirm}){
    const { uid, token } = useParams();
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({new_password: "", re_new_password: ""});
    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currentData => {currentData[changedField] = newValue; return {...currentData}});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        reset_password_confirm(uid, token, formData.new_password, formData.re_new_password);
        setRequestSent(true);
    };
    
    if (requestSent){
        return <Navigate to= '/login'/>
    }
    return (
        <main className="login-grid">
            <div className="top-side">
                <img className="logo" src={Logo} alt="" />
                <h1 className="loginText">Reset Password Confirm</h1>
            </div>
            <form onSubmit={handleSubmit} className="bottom-side">
                <input type="text" name="new_password" value={formData.new_password} onChange={handleChange} placeholder="Password..." required/>
                <input type="text" name="re_new_password" value={formData.re_new_password} onChange={handleChange} placeholder="Confirm Password..." required/>
                <button className="rstc-button">Confirm Password</button>
            </form>
        </main>
    );
}

export default connect(null, {reset_password_confirm})(ResetPasswordConfirm);