import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
    return (
        <nav>
            <ul>
                <li><Link to={"/home"} activeStyle={{color: "red"}}>Link1</Link></li>
                <li><Link to={"/user"} activeClassName={"active"}>Link2</Link></li>
            </ul>
        </nav>
    );
};