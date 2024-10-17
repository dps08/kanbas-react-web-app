import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();  // Get the current course ID from the URL
  const { pathname } = useLocation();  // Get the current path to highlight active link

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `/Kanbas/Courses/${cid}/${link}`;
        const isActive = pathname.includes(link);

        return (
          <Link
            key={link}
            to={linkPath}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item border-0 ${isActive ? "active text-white bg-primary" : "text-danger bg-light"}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
