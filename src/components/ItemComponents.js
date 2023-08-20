import React, { Component } from "react";

export default class ItemComponents extends Component {
    render() {
        return (
            <div class="card text-center" style={{ width: "18rem" }}>
                <img
                    src="https://t3.ftcdn.net/jpg/03/51/16/32/360_F_351163233_Hbb2fgCkHndin1aYmgPlfOIr9DDUmffu.jpg"
                    class="card-img-top"
                    alt="..."
                ></img>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                    </p>
                </div>
                <div class="card-footer text-body-secondary">
                    <a href="#" class="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        );
    }
}
