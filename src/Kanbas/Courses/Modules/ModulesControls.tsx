// src/Kanbas/Courses/Modules/ModulesControls.tsx

import React from "react";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import ModuleEditor from "./ModuleEditor";
import { useSelector } from "react-redux";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  return (
    <div id="wd-modules-controls" className="text-nowrap mb-3 d-flex justify-content-end">
      {currentUser?.role === "FACULTY" && (
        <>
          {/* + Module button opens ModuleEditor dialog */}
          <button
            id="wd-add-module-btn"
            className="btn btn-lg btn-danger me-1"
            data-bs-toggle="modal"
            data-bs-target="#wd-add-module-dialog"
          >
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Module
          </button>

          {/* Collapse All button */}
          <button
            className="btn btn-lg btn-warning me-1"
            onClick={() => {
              console.log("Collapse all");
            }}
          >
            Collapse All
          </button>

          {/* View Progress button */}
          <button
            id="wd-view-progress"
            className="btn btn-lg btn-info me-1"
            onClick={() => {
              console.log("View progress");
            }}
          >
            View Progress
          </button>

          {/* Dropdown for Publish options */}
          <div className="dropdown d-inline">
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

          {/* Render ModuleEditor only if currentUser is FACULTY */}
          <ModuleEditor
            dialogTitle="Add Module"
            moduleName={moduleName}
            setModuleName={setModuleName}
            addModule={addModule}
          />
        </>
      )}
    </div>
  );
}
