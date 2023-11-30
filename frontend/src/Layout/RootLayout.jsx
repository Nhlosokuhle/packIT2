import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import {Outlet} from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";

function RootLayout(props){
    useEffect(() => {
        props.checkAuthenticated();
        props.load_user();
    }, []);
    return (
        <div className="container">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default connect(null, {checkAuthenticated, load_user})(RootLayout);