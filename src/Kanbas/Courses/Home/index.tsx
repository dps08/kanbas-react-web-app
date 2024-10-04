import React from "react";
import CourseStatus from "./Status";
import Modules from "../Modules";
export default function Home() {
  return (
    <div className="d-flex" id="wd-home">
  <div className="flex-fill">
          <Modules />
        </div>
        <div className="d-none d-md-block">
          <CourseStatus />
        </div>
      </div>
  );
}
