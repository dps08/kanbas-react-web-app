import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { enroll, unenroll } from "./Account/Enrollments/reducer";
import * as enrollmentsClient from "./Account/Enrollments/client";
import { useState } from "react";

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image?: string;
  description: string;
}

interface DashboardProps {
  courses: Course[];
  course: Course;
  setCourse: (course: Course) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);

  const enrolledCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === course._id
    )
  );

  const displayedCourses =
    currentUser.role === "FACULTY"
      ? courses
      : showAllCourses
      ? courses
      : enrolledCourses;

  const handleUnenroll = async (courseId: string) => {
    const enrollment = enrollments.find(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
    if (enrollment) {
      dispatch(unenroll(enrollment._id));
      await enrollmentsClient.unEnrollUser(courseId);
    }
  };

  const handleEnroll = async (courseId: string) => {
    dispatch(enroll({ user: currentUser._id, course: courseId }));
    await enrollmentsClient.enrollUser(courseId);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setCourse({ ...course, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>

      {currentUser.role === "FACULTY" ? (
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
              disabled={course._id === "0"}
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="Course Name"
          />
          <input
            value={course.number}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
            placeholder="Course Number"
          />
          <textarea
            value={course.description}
            className="form-control mb-2"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            placeholder="Course Description"
          />
          <input
            type="file"
            className="form-control mb-2"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
      ) : (
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show My Courses" : "Browse All Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-published">
        {currentUser.role === "FACULTY"
          ? "All Published Courses"
          : showAllCourses
          ? "Available Courses"
          : "My Enrolled Courses"}{" "}
        ({displayedCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses.map((course: Course) => {
            const isEnrolled = enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
            );

            return (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
                key={course._id}
              >
                <div className="card h-100 rounded-3 overflow-hidden d-flex flex-column">
                  <Link
                    to={
                      currentUser.role === "FACULTY" || isEnrolled
                        ? `/Kanbas/Courses/${course._id}/Home`
                        : "#"
                    }
                    className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column"
                  >
                    <img
                      src={course.image || `/images/${course.name || course.number}.jpg`}
                      className="card-img-top"
                      height={160}
                      alt={`${course.name || course.number} thumbnail`}
                    />
                    <div className="card-body flex-grow-1">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                    </div>
                    <div className="card-footer border-top">
                      {currentUser.role === "FACULTY" ? (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2"
                            id="wd-edit-course-click"
                          >
                            Edit
                          </button>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                        </>
                      ) : (
                        <button
                          id={
                            isEnrolled
                              ? "wd-unenroll-course"
                              : "wd-enroll-course"
                          }
                          className={`btn ${
                            isEnrolled
                              ? "btn-danger"
                              : "btn-success"
                          }`}
                          onClick={(event) => {
                            event.preventDefault();
                            isEnrolled
                              ? handleUnenroll(course._id)
                              : handleEnroll(course._id);
                          }}
                        >
                          {isEnrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
