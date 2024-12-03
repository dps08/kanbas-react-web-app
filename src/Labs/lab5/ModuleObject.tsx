import React, { useState } from "react";

const MODULE_API_URL = "https://kanbas-node-server-app-divit-2bc1b0d87817.herokuapp.com/lab5/module";

export default function ModuleObjects() {
  const [module, setModule] = useState({
    id: 1,
    name: "Introduction to NodeJS",
    description: "Learn the basics of Node.js",
    course: "Web Development",
  });

  return (
    <div>
      <h3>Module Management</h3>

      <h4>Retrieve Module</h4>
      <a href={`${MODULE_API_URL}`} className="btn btn-primary">
        Get Module
      </a>
      <a href={`${MODULE_API_URL}/name`} className="btn btn-secondary ms-2">
        Get Module Name
      </a>
      <hr />

      <h4>Modify Module</h4>
      <div>
        <input
          type="text"
          value={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
          className="form-control"
        />
        <a
          href={`${MODULE_API_URL}/name/${module.name}`}
          className="btn btn-primary mt-2"
        >
          Update Name
        </a>
      </div>
      <hr />

      <div>
        <input
          type="text"
          value={module.description}
          onChange={(e) => setModule({ ...module, description: e.target.value })}
          className="form-control"
        />
        <a
          href={`${MODULE_API_URL}/description/${module.description}`}
          className="btn btn-primary mt-2"
        >
          Update Description
        </a>
      </div>
      <hr />
    </div>
  );
}
