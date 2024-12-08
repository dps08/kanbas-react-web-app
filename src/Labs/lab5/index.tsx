import EnvironmentVariables from "./EnvironmentVariables";
import HttpClient from "./HttpClient";
import ModuleObjects from "./ModuleObject";
import PathParameters from "./PathParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
const REMOTE_SERVER = "https://kanbas-node-server-app-6-0e365f0d0bc9.herokuapp.com";
export default function Lab5() {
    return (
      <div id="wd-lab5">
        <h2>Lab 5</h2>
        <div className="list-group">
          <a href="https://kanbas-node-server-app-6-0e365f0d0bc9.herokuapp.com/lab5/welcome"        
             className="list-group-item">
             Welcome
          </a>
        </div><hr/>
        <EnvironmentVariables />
        <PathParameters/>
        <WorkingWithObjects/>
        <ModuleObjects/>
        <WorkingWithArrays/>
        <HttpClient/>
        <WorkingWithObjectsAsynchronously/>
        <WorkingWithArraysAsynchronously/>
      </div>
    );
  }
  