import React from "react";
import { Link } from "react-router-dom";
import { courses } from "./Database"; // Adjust the import path based on your directory structure

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {courses.map((course) => (
            <div key={course._id} className="wd-dashboard-course col" style={{ width: "260px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link 
                  className="wd-dashboard-course-link text-decoration-none text-dark" 
                  to={`/Kanbas/Courses/${course._id}/Home`}
                >
                  {/* I have used the same image but we can update image source dynamically based on course ID or other attribute */}
                  <img 
                    src={`/images/${course._id}.png`} 
                    width="100%" 
                    height={160} 
                    alt={`${course.name} thumbnail`} 
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description}
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
