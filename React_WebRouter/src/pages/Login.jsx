// import React from "react";
import "./Pages.css";
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="pages-wrapper">
            <h1>Please Log In</h1> 
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <br />
                <div>
                    <button type="submit">Submit</button>
                </div>
                <span>Go back <Link to="/">Home</Link></ span>
            </form>
        </div>
    );
}
