import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();  // Course ID from the URL
  const { pathname } = useLocation();  // Current path for active link highlighting

  // Ensure that `cid` is defined to avoid issues with invalid paths
  if (!cid) {
    return null; // Render nothing or a fallback UI if `cid` is undefined
  }

  // Define the course sections that will appear in the navigation
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "People"];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => {
        // Construct the navigation path dynamically with `cid`
        const linkPath = `/Kanbas/Courses/${cid}/${link.toLowerCase()}`;
        
        // Check if the current path matches the exact link's path for active highlighting
        const isActive = pathname === linkPath;

        return (
          <Link
            key={link}
            to={linkPath}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item border-0 ${
              isActive ? "active text-white bg-primary" : "text-danger bg-light"
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}