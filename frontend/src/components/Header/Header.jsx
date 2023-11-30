import "./Header.css";
import Logo from "./fitConnectLogo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

function Header({logout, isAuthenticated}){
    return (
        <nav className="header">
            <img className="logo" src={Logo} alt="fitConnect logo" />
            <div className="links">
                <Link className="homeLink" to="/menu">Home</Link>
                <Link onClick={() => logout()} className="homeLink" to="/login">Logout</Link>
            </div>
        </nav>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {logout})(Header);