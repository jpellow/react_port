import React from 'react'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <h1 className="text-dark">Jeremy Pellow</h1>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="#About" onClick={() => props.handlePageChange("About")}>About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Portfolio" onClick={() => props.handlePageChange("Portfolio")}>Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Github" onClick={() => props.handlePageChange("Github")}>Github</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/jeremypellow/">Linkedin</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Resume" onClick={() => props.handlePageChange("Resume")}>Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Contact" onClick={() => props.handlePageChange("Contact")}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}