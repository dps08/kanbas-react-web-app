import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img
                  src="/images/ReactJs.png"
                  width="100%"
                  height={160}
                  alt="React JS Course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img
                  src="/images/ReactJs.png"
                  width="100%"
                  height={160}
                  alt="PDP Course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5010 PDP
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Program Design Paradigm
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img
                  src="/images/ReactJs.png"
                  width="100%"
                  height={160}
                  alt="Co-op Course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    Co-op
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Career Resources and internship
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img
                  src="/images/ReactJs.png"
                  width="100%"
                  height={160}
                  alt="Algorithms Course"
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    Algorithms
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Course in next sem
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
