import React from 'react';
import { NavLink } from "react-router-dom";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><NavLink to={"/home"} activeStyle={{color: "red"}} activeClassName={"active"}>Home</NavLink></li>
                        <li><NavLink to={"/user/10"} activeStyle={{color: "red"}} activeClassName={"active"}>User</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
