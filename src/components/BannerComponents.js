import React, { Component } from "react";

export default class BannerComponents extends Component {
    render() {
        return (
            <div className="container mt-3 bg-body-secondary p-5">
                <p class="fs-1">A Warm Welcome</p>
                <p>
                    Bootstrap utility classes are used to create this jumbotron
                    since the old component has been removed from the framework.
                    Why create custom CSS when you can use utilities?
                </p>
                <button type="button" class="btn btn-primary">
                    Call to action!
                </button>
            </div>
        );
    }
}
