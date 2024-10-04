import React from "react";
import { BsSearch, BsPlus } from "react-icons/bs";

export default function Assignments() {
    return (
        <div id="wd-assignments" className="container">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="input-group">
                    <span className="input-group-text">
                        <BsSearch />
                    </span>
                    <input
                        id="wd-search-assignment"
                        className="form-control"
                        placeholder="Search for Assignments"
                    />
                </div>
                <div className="float-end">
                    <button id="wd-add-assignment-group" className="btn btn-success me-2">
                        <BsPlus /> Group
                    </button>
                    <button id="wd-add-assignment" className="btn btn-success">
                        <BsPlus /> Assignment
                    </button>
                </div>
            </div>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button className="btn btn-link">+</button>
            </h3>
            <ul id="wd-assignment-list" className="list-group">
                <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                            A1 - ENV + HTML
                        </a>
                        <div className="text-muted">Due: Oct 5, 2024 | Start: 10 AM | Points: 100</div>
                    </div>
                    <div className="border-start border-3 border-success ms-3"></div>
                </li>
                <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/124">
                            A2 - CSS + JS
                        </a>
                        <div className="text-muted">Due: Oct 10, 2024 | Start: 10 AM | Points: 100</div>
                    </div>
                    <div className="border-start border-3 border-success ms-3"></div>
                </li>
                <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/125">
                            A3 - React Basics
                        </a>
                        <div className="text-muted">Due: Oct 15, 2024 | Start: 11 AM | Points: 100</div>
                    </div>
                    <div className="border-start border-3 border-success ms-3"></div>
                </li>
                <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/126">
                            A4 - API Integration
                        </a>
                        <div className="text-muted">Due: Oct 20, 2024 | Start: 9 AM | Points: 100</div>
                    </div>
                    <div className="border-start border-3 border-success ms-3"></div>
                </li>
                <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/127">
                            A5 - Responsive Design
                        </a>
                        <div className="text-muted">Due: Oct 25, 2024 | Start: 2 PM | Points: 100</div>
                    </div>
                    <div className="border-start border-3 border-success ms-3"></div>
                </li>
                <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/128">
                            A6 - Final Project
                        </a>
                        <div className="text-muted">Due: Nov 1, 2024 | Start: 12 PM | Points: 200</div>
                    </div>
                    <div className="border-start border-3 border-success ms-3"></div>
                </li>
            </ul>
        </div>
    );
}
