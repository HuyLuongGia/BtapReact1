import React, { Component } from "react";

export default class HeaderComponents extends Component {
    render() {
        return (
            <div class="bg-black">
                <nav class="navbar container">
                    <div class="container-fluid">
                        <a class="navbar-brand text-white">Start Bootstrap</a>
                        <nav class="navbar navbar-expand-lg">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a
                                        class="nav-link active text-white"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white-50" href="#">
                                        About
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white-50" href="#">
                                        Services
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white-50" href="#">
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
