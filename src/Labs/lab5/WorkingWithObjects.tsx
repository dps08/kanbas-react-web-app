import React, { useState } from "react";

const ASSIGNMENT_API_URL = "https://kanbas-node-server-app-divit-2bc1b0d87817.herokuapp.com/lab5/assignment";

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  return (
    <div>
      <h3>Working With Objects</h3>

      <h4>Retrieve Assignment</h4>
      <a href={`${ASSIGNMENT_API_URL}`} className="btn btn-primary">
        Get Assignment
      </a>
      <a href={`${ASSIGNMENT_API_URL}/title`} className="btn btn-secondary ms-2">
        Get Assignment Title
      </a>
      <hr />

      <h4>Modify Assignment</h4>
      <div>
        <input
          type="text"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          className="form-control"
        />
        <a
          href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
          className="btn btn-primary mt-2"
        >
          Update Title
        </a>
      </div>
      <hr />

      <div>
        <input
          type="number"
          value={assignment.score}
          onChange={(e) => setAssignment({ ...assignment, score: Number(e.target.value) })}
          className="form-control"
        />
        <a
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
          className="btn btn-primary mt-2"
        >
          Update Score
        </a>
      </div>
      <hr />

      <div>
        <input
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        />
        <label className="ms-2">Completed</label>
        <a
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
          className="btn btn-primary mt-2"
        >
          Update Completed
        </a>
      </div>
      <hr />
    </div>
  );
}
