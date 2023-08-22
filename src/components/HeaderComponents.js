import React, { Component } from "react";

export default class HeaderComponents extends Component {
    render() {
        return (
            <div className="bg-black">
                <nav className="navbar container">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white">Start Bootstrap</a>
                        <nav className="navbar navbar-expand-lg">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active text-white"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white-50" href="#">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white-50" href="#">
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white-50" href="#">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </nav>
            </div>
        );
    }
}
