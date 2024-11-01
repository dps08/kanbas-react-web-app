// src/Kanbas/Courses/Assignments/AssignmentEditor.tsx
import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { AiOutlineCheck, AiOutlineEllipsis } from "react-icons/ai";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const existingAssignment = assignments.find((a: any) => a._id === aid);

  const [assignment, setAssignment] = useState<any>(
    existingAssignment || {
      title: "",
      description: "",
      points: 0,
      dueDate: "",
      availableDate: "",
      untilDate: "",
    }
  );

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (existingAssignment) {
      dispatch(updateAssignment({ ...assignment, course: cid }));
    } else {
      dispatch(addAssignment({ ...assignment, course: cid }));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container">
      <h2>{existingAssignment ? "Edit Assignment" : "New Assignment"}</h2>
      <form onSubmit={handleSave}>
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input
            id="wd-name"
            className="form-control"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea
            id="wd-description"
            className="form-control"
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          />
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
          <div className="col-sm-10">
            <input
              id="wd-points"
              type="number"
              className="form-control"
              value={assignment.points}
              onChange={(e) => setAssignment({ ...assignment, points: e.target.value })}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-available-date" className="col-sm-2 col-form-label">Available Date</label>
          <div className="col-sm-10">
            <input
              type="date"
              id="wd-available-date"
              className="form-control"
              value={assignment.availableDate}
              onChange={(e) => setAssignment({ ...assignment, availableDate: e.target.value })}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">Due Date</label>
          <div className="col-sm-10">
            <input
              type="date"
              id="wd-due-date"
              className="form-control"
              value={assignment.dueDate}
              onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-until-date" className="col-sm-2 col-form-label">Available Until</label>
          <div className="col-sm-10">
            <input
              type="date"
              id="wd-until-date"
              className="form-control"
              value={assignment.untilDate}
              onChange={(e) => setAssignment({ ...assignment, untilDate: e.target.value })}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-outline-secondary me-2">
            <AiOutlineEllipsis /> Cancel
          </Link>
          {currentUser.role === "FACULTY" && (
            <button type="submit" className="btn btn-success">
              <AiOutlineCheck /> Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
