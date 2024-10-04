import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import React from "react";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button
        id="wd-add-module-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>
      <div className="dropdown d-inline me-1 float-end">
        <button
          id="wd-publish-all-btn"
          className="btn btn-lg btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              id="wd-publish-all-modules-and-items-btn"
              className="dropdown-item"
              onClick={() => {
                console.log("Publish all modules and items");
              }}
            >
              <GreenCheckmark />
              Publish all modules and items
            </button>
          </li>
          <li>
            <button
              id="wd-publish-modules-only-button"
              className="dropdown-item"
              onClick={() => {
                console.log("Publish modules only");
              }}
            >
              <GreenCheckmark />
              Publish modules only
            </button>
          </li>
          <li>
            <button
              id="wd-unpublish-all-modules-and-items"
              className="dropdown-item"
              onClick={() => {
                console.log("Unpublish all modules and items");
              }}
            >
              Unpublish all modules and items
            </button>
          </li>
          <li>
            <button
              id="wd-unpublish-modules-only"
              className="dropdown-item"
              onClick={() => {
                console.log("Unpublish modules only");
              }}
            >
              Unpublish modules only
            </button>
          </li>
        </ul>
      </div>
      <button
        id="wd-view-progress"
        className="btn btn-lg btn-info me-1 float-end"
        onClick={() => {
          console.log("View progress");
        }}
      >
        View Progress
      </button>
      <button
        id="wd-collapse-all"
        className="btn btn-lg btn-warning float-end"
        onClick={() => {
          console.log("Collapse all");
        }}
      >
        Collapse All
      </button>
    </div>
  );
}
