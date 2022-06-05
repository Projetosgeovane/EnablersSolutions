import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" activeStyle={{ fontWeight: 'bold' }} to="/" >Clientes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeStyle={{ fontWeight: 'bold' }} to="/user">Usuários</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;