import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

//This component sets the "active" class on the navigation link item
const Navbar = (props) => {
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <Link className="navbar-brand" to="/">
                    The WSJ Scrapper
        </Link>
            </div>
            <ul className="nav navbar-nav">
                <li
                    className={
                        window.location.pathname === "/" ||
                            window.location.pathname === "/saved"
                            ? "active"
                            : ""
                    }
                >
                    <Link to="/">Saved</Link>
                </li>
                <li
                    className={window.location.pathname === "/find" ? "active" : ""}
                >
                    <Link to="/discover">Find</Link>
                </li>
                <li>
                    <button className="btn btn-secondary scrapeButton" role="populate">Scrape Articles!</button>
                    </li>
            </ul>
        </div>
    </nav>
}  

export default Navbar;