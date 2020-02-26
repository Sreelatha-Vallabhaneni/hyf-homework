
import React from 'react';
import GoogleOAuth from "./HeaderContent/GoogleOAuth"
import "../css/header.css"
import firebaseInst from "../helpers/firebase.js";
import EmailPassSignIn from "./HeaderContent/emailPassAuth";

function Header (props) {
    return (
        <div className="header">
            <h2>Header</h2>
            <GoogleOAuth firebase={firebaseInst}/>
            <EmailPassSignIn/>
            {props.children}
        </div>
    )
}

export default Header;