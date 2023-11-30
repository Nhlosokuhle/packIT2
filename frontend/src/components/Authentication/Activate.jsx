import "./Authentication.css";
import Logo from "./fitConnectLogo.png";
import { Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { verify } from "../../actions/auth";

function Activate({verify}){
    const {uid, token} = useParams();
    const [verified, setVerified] = useState(false);
    const handleSubmit =(e) => {
        e.preventDefault();
        verify(uid,token);
        setVerified(true);
    };
    if (verified){
        return <Navigate to='/login'/>;
    }
    return (
        <main className="login-grid">
            <div className="top-side">
                <img className="logo" src={Logo} alt="" />
                <h1 className="loginText">Activate</h1>
            </div>
            <form onSubmit={handleSubmit} className="bottom-side">
                <p className="Auth-text">Click the button below to activate your account</p>
                <button className="activate-button">Activate</button>
            </form>
        </main>
    );
}

export default connect(null, {verify})(Activate);