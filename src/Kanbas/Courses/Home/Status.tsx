import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import React from "react";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button 
            className="btn btn-lg btn-secondary w-100 text-nowrap" 
            aria-label="Unpublish the course"
          >
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish 
          </button>
        </div>
        <div className="w-50">
          <button 
            className="btn btn-lg btn-success w-100" 
            aria-label="Publish the course"
          >
            <FaCheckCircle className="me-2 fs-5" /> Publish 
          </button>
        </div>
      </div>
      <br />
      <button 
        className="btn btn-lg btn-secondary w-100 mt-1 text-start" 
        aria-label="Import existing content"
      >
        <BiImport className="me-2 fs-5" /> Import Existing Content 
      </button>
      <button 
        className="btn btn-lg btn-secondary w-100 mt-1 text-start" 
        aria-label="Import from Commons"
      >
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons 
      </button>
      {/* Add additional buttons here if necessary */}
    </div>
  );
}
