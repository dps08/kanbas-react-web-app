import React, { useEffect, useState } from "react";
import * as client from "./client";

export default function WorkingWithObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<any>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const fetchedAssignment = await client.fetchAssignment();
        setAssignment(fetchedAssignment);
        setErrorMessage(null);
      } catch (error) {
        setErrorMessage("Failed to fetch the assignment. Please try again.");
      }
    };

    fetchAssignment();
  }, []);

  const updateTitle = async (title: string) => {
    try {
      const updatedAssignment = await client.updateTitle(title);
      setAssignment(updatedAssignment);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Failed to update the title. Please try again.");
    }
  };

  const updateDescription = async (description: string) => {
    try {
      const updatedAssignment = await client.updateDescription(description);
      setAssignment(updatedAssignment);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Failed to update the title. Please try again.");
    }
  };

  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      {errorMessage && (
        <div className="alert alert-danger mb-2">{errorMessage}</div>
      )}

      <h4>Assignment</h4>
      <input
        defaultValue={assignment.title}
        className="form-control mb-2"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <textarea
        defaultValue={assignment.description}
        className="form-control mb-2"
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />
      <input
        type="date"
        className="form-control mb-2"
        defaultValue={assignment.due}
        onChange={(e) =>
          setAssignment({ ...assignment, due: e.target.value })
        }
      />
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="wd-completed"
          defaultChecked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        <label className="form-check-label" htmlFor="wd-completed">
          Completed
        </label>
      </div>
      <button
        className="btn btn-primary me-2"
        onClick={() => updateTitle(assignment.title)}
      >
        Update Title
      </button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
  );
}