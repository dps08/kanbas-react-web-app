import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineCheck, AiOutlineEllipsis } from "react-icons/ai";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container">
            <h2>Edit Assignment</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input id="wd-name" className="form-control" defaultValue="A1 - ENV + HTML" />
                </div>
                <div className="mb-3">
                    <label htmlFor="wd-description" className="form-label">Description</label>
                    <textarea id="wd-description" className="form-control" rows={4}>
                        The assignment is available online. Submit a link to the landing page of your project.
                    </textarea>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
                    <div className="col-sm-10">
                        <input id="wd-points" className="form-control" defaultValue={100} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">Due Date</label>
                    <div className="col-sm-10">
                        <input type="date" id="wd-due-date" className="form-control" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-assignment-group" className="col-sm-2 col-form-label">Assignment Group</label>
                    <div className="col-sm-10">
                        <select id="wd-assignment-group" className="form-select">
                            <option value="">Select Group</option>
                            <option value="group1">Group 1</option>
                            <option value="group2">Group 2</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
                    <div className="col-sm-10">
                        <select id="wd-submission-type" className="form-select">
                            <option value="online">Online</option>
                            <option value="in-person">In-Person</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-display-grade" className="col-sm-2 col-form-label">Display Grade As</label>
                    <div className="col-sm-10">
                        <select id="wd-display-grade" className="form-select">
                            <option value="percentage">Percentage</option>
                            <option value="points">Points</option>
                        </select>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-success me-2">
                        <AiOutlineCheck /> Save
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        <AiOutlineEllipsis /> Options
                    </button>
                </div>
            </form>
        </div>
    );
}
