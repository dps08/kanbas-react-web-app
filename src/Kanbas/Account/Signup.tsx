import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container">
      <h1>Sign up</h1>
      <input
        id="wd-username"
        placeholder="Username"
        className="form-control mb-2"
      />
      <input
        id="wd-password"
        placeholder="Password"
        type="password"
        className="form-control mb-2"
      />
      <input
        id="wd-verify-password"
        placeholder="Verify Password"
        type="password"
        className="form-control mb-2"
      />
      <Link
        id="wd-signup-btn"
        to="/Kanbas/Account/Profile"
        className="btn btn-primary w-100 mb-2"
      >
        Sign up
      </Link>
      <Link id="wd-signin-link" to="/Kanbas/Account/Signin">
        Sign in
      </Link>
    </div>
  );
}
