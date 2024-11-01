// src/Kanbas/Account/Navigation.tsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="account-navigation">
      <nav>
        <ul>
          {links.includes("Signin") && (
            <li>
              <Link to="/Kanbas/Account/Signin" className={pathname === "/Kanbas/Account/Signin" ? "active" : ""}>
                Sign in
              </Link>
            </li>
          )}
          {links.includes("Signup") && (
            <li>
              <Link to="/Kanbas/Account/Signup" className={pathname === "/Kanbas/Account/Signup" ? "active" : ""}>
                Sign up
              </Link>
            </li>
          )}
          {links.includes("Profile") && (
            <li>
              <Link to="/Kanbas/Account/Profile" className={pathname === "/Kanbas/Account/Profile" ? "active" : ""}>
                Profile
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
