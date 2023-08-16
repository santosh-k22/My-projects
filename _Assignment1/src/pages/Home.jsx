// import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";

function Home() {
    return (
        <div className="pages-wrapper">
            <h1>Home Page!</h1>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
    );
}
export default Home;
