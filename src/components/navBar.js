import React from "react";

const NavBar = () => {
    return (
        <section className="nav-section">
            <div><h2>Client Auth Project</h2></div>
            <nav className="main-nav">
                <a>LOGIN</a>
                <a>FRIENDLIST</a>
                <a>ADDFRIEND</a>
                <a>LOGOUT</a>
            </nav>
        </section>
    )

}

export default NavBar