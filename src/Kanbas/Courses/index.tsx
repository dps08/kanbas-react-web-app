import React from "react";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import CoursesNavigation from "./Navigation";
import { courses } from "../Database";
import Assignments from "./Assignments";
import Modules from "./Modules";
import Home from "./Home";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";

export default function Courses() {
  const { cid } = useParams();        // Get course ID from URL
  const { pathname } = useLocation(); // Get the current path
  const course = courses.find((course) => course._id === cid);

  // Extract section name from the path to display as breadcrumb
  const section = pathname.split("/")[4] || "Home"; 

  return (
    <div id="wd-courses">
      {/* Breadcrumb Display */}
      <h2 className="text-danger">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        {course && course.name} &gt; {section}
      </h2>
      <hr />

      <div className="d-flex">
        {/* Sidebar Navigation */}
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>

        {/* Main Content */}
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
