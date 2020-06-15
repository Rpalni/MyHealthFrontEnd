import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

function Header() {

    debugger;
    var currentRoute = window.location.pathname;
    var pageHeading = "Image List";

    if (currentRoute === "/postImage") {
        pageHeading = "Post Image";
    }
    else if (currentRoute.indexOf("/imagedetails/") > -1) {
        pageHeading = "Image Details";
    }

    return (
        <Router>
            <div>
                <h1><center>Image Management System</center></h1><br />
                <h3><strong>{pageHeading}</strong></h3>
                <p> <a href="/">Image List</a> | <a href="/postImage">Post Image</a></p>
            </div>
        </Router >
    );
}

export default Header;
