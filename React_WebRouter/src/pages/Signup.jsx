// import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="pages-wrapper">
            <h1>Do not have an account ?</h1>
            <h2>Sign up</h2>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Email</p>
                    <input type="emial" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <br />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <span>
                Already have an account?
                <Link to="/login">Log in</Link>
            </span>
            <br />
            <span>
                Go back <Link to="/">Home</Link>
            </span>
        </div>
    );
}
