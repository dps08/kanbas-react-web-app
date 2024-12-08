import React, { Dispatch, SetStateAction, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { enroll, unenroll } from "./Account/Enrollments/reducer";
import * as enrollmentsClient from "./Account/Enrollments/client";

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
  setCourse: Dispatch<SetStateAction<Course>>;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);

  if (!currentUser || !currentUser.role) {
    return <div>Please log in to access the dashboard.</div>;
  }

  const isFaculty = currentUser.role === "FACULTY";

  const handleEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      const enrollment = enrollments.find(
        (enrollment: any) =>
          enrollment.user === currentUser._id && enrollment.course === courseId
      );
      if (enrollment) {
        dispatch(unenroll(enrollment._id));
        await enrollmentsClient.unEnrollUser(courseId);
      }
    } else {
      dispatch(enroll({ user: currentUser._id, course: courseId }));
      await enrollmentsClient.enrollUser(courseId);
    }
  };

  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );

  const enrolledCourses = courses.filter((course) =>
    isEnrolled(course._id)
  );

  return (
    <div className="p-4" id="wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      {isFaculty ? (
        <>
          <h5>Course Management</h5>
          <input
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            className="form-control mb-2"
            placeholder="Course Name"
          />
          <input
            value={course.number}
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
            className="form-control mb-2"
            placeholder="Course Number"
          />
          <textarea
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            className="form-control mb-2"
            placeholder="Course Description"
          />
          <input
            type="file"
            className="form-control mb-2"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                  setCourse({ ...course, image: reader.result as string });
                };
                reader.readAsDataURL(file);
              }
            }}
          />
          <div className="d-flex gap-2 mb-4">
            <button
              onClick={updateCourse}
              className="btn btn-warning"
              id="wd-update-course-click"
              disabled={course._id === "0"}
            >
              Update
            </button>
            <button
              onClick={addNewCourse}
              className="btn btn-primary"
              id="wd-add-new-course-click"
            >
              Add
            </button>
          </div>

          <h2>Published Courses ({courses.length})</h2>
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {courses.map((c) => (
              <div key={c._id} className="col" style={{ width: "300px" }}>
                <div className="card h-100">
                  <img
                    src={c.image || "/images/reactjs.jpg"}
                    className="card-img-top"
                    height={160}
                    alt={`${c.name} thumbnail`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{c.name}</h5>
                    <p className="card-text">{c.number}</p>
                    <p
                      className="card-text overflow-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {c.description}
                    </p>
                    <div className="d-flex gap-2 mt-auto">
                      <Link
                        to={`/Kanbas/Courses/${c._id}/Home`}
                        className="btn btn-primary"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => setCourse(c)}
                        className="btn btn-warning"
                        id="wd-edit-course-click"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteCourse(c._id)}
                        className="btn btn-danger"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>
              {showAllCourses
                ? `Available Courses (${courses.length})`
                : `My Courses (${enrolledCourses.length})`}
            </h2>
            <button
              className="btn btn-primary"
              onClick={() => setShowAllCourses(!showAllCourses)}
            >
              {showAllCourses ? "Show My Courses" : "Browse All Courses"}
            </button>
          </div>

          <div className="row row-cols-1 row-cols-md-5 g-4">
            {(showAllCourses ? courses : enrolledCourses).map((course) => (
              <div key={course._id} className="col" style={{ width: "300px" }}>
                <div className="card h-100">
                  <img
                    src={course.image || "/images/reactjs.jpg"}
                    className="card-img-top"
                    height={160}
                    alt={`${course.name} thumbnail`}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{course.name}</h5>
                    <p
                      className="card-text overflow-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <div className="mt-auto">
                      <Link
                        to={`/Kanbas/Courses/${course._id}/Home`}
                        className="btn btn-primary mb-2 w-100"
                      >
                        Go to Course
                      </Link>
                      <button
                        className={`btn w-100 ${
                          isEnrolled(course._id) ? "btn-danger" : "btn-success"
                        }`}
                        onClick={() =>
                          handleEnrollment(course._id, isEnrolled(course._id))
                        }
                      >
                        {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
