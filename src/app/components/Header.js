import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
    return (
        <div className="row">
            <div className="column large-6">
                <p>Hello</p>
            </div>
            <div className="column large-6">
                <nav>
                    <ul>
                        <li><Link to={"/home"} activeStyle={{color: "red"}}>Link1</Link></li>
                        <li><Link to={"/user"} activeClassName={"active"}>Link2</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};