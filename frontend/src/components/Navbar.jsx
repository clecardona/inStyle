import React from "react";
import { Link } from "react-router-dom";


export default function Navbar({ onLogout }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">

                InStyle

            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor01"
                aria-controls="navbarColor01"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/Profile" className="nav-link">
                            Profile
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Home" className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Vote" className="nav-link">
                            Vote
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Winner" className="nav-link">
                            Winner
                        </Link>
                    </li>
                </ul>

                <button
                    className="btn btn-outline-info my-2 my-sm-0"
                    onClick={onLogout}
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}
