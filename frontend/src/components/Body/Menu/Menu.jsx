import "./Menu.css";
import BookingIcon from "./book.png";
import StatusIcon from "./status.png";
import { Link } from "react-router-dom";

function Menu(){
    return (
        <main className="menu-grid">
            <h1 className="welcomeText">Hello</h1>
            <div className="menu-icon-grid">
                <div className="menu-icon">
                    <Link to="booking"><img className="icon" src={BookingIcon} alt="" /></Link>
                    <p className="icon-text">Book a storage</p>
                </div>
                <div className="menu-icon">
                   <Link to="status"><img className="icon" src={StatusIcon} alt="" /></Link>
                    <p className="icon-text">Booking status</p>
                </div>
            </div>
        </main>
    );
}

export default Menu;