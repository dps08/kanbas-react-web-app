import React from "react";
import { useParams, Link } from "react-router-dom";
import { BsSearch, BsPlus } from "react-icons/bs";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams(); // Course ID from the URL
  const courseAssignments = db.assignments.filter(assignment => assignment.course === cid);

  return (
    <div id="wd-assignments" className="container">
      {/* Header and Search functionality */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group">
          <span className="input-group-text">
            <BsSearch />
          </span>
          <input id="wd-search-assignment" className="form-control" placeholder="Search for Assignments" />
        </div>
        <button id="wd-add-assignment" className="btn btn-success">
          <BsPlus /> Add Assignment
        </button>
      </div>

      {/* Assignments List */}
      <ul id="wd-assignment-list" className="list-group">
        {courseAssignments.map((assignment) => (
          <li key={assignment._id} className="wd-assignment-list-item list-group-item">
            <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none">
              {assignment.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
