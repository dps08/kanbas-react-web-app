// src/Kanbas/Courses/Assignments/index.tsx
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { BsSearch, BsPlus, BsTrash } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

  const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);

  const handleDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete));
      setShowDeleteDialog(false);
      setAssignmentToDelete(null);
    }
  };

  return (
    <div id="wd-assignments" className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group">
          <span className="input-group-text">
            <BsSearch />
          </span>
          <input id="wd-search-assignment" className="form-control" placeholder="Search for Assignments" />
        </div>
        {currentUser.role === "FACULTY" && (
          <button
            id="wd-add-assignment"
            className="btn btn-success"
            onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/New`)}
          >
            <BsPlus /> Add Assignment
          </button>
        )}
      </div>

      <ul id="wd-assignment-list" className="list-group">
        {courseAssignments.map((assignment: any) => (
          <li key={assignment._id} className="wd-assignment-list-item list-group-item d-flex justify-content-between">
            <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none">
              {assignment.title}
            </Link>
            {currentUser.role === "FACULTY" && (
              <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                  setShowDeleteDialog(true);
                  setAssignmentToDelete(assignment._id);
                }}
              >
                <BsTrash />
              </button>
            )}
          </li>
        ))}
      </ul>

      {showDeleteDialog && (
        <div className="modal fade show d-block" tabIndex={-1} role="dialog" aria-labelledby="deleteModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">Delete Assignment</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDeleteDialog(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this assignment?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteDialog(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
