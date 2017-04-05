import React from "react";

import {Header} from "./Header";

export class Root extends React.Component {
    render() {
        return (
            <section className="section">
                <div className="section-wrapper">
                    <div className="row">
                        <Header />
                    </div>
                </div>
                <hr/>
                {this.props.children}
            </section>
        );
    }
}