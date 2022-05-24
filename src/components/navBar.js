import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <section className="nav-section">
            <div><h2>Client Auth Project</h2></div>
            <nav className="main-nav">
                <Link to="/login">LOGIN</Link>
                <Link to="/friends">FRIENDLIST</Link>
                <Link to="/friends/add">ADDFRIEND</Link>
                <a>LOGOUT</a>
            </nav>
        </section>
    )

}

export default NavBar