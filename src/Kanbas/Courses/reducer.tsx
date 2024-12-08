// src/Kanbas/Courses/reducer.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Enrollment interface
interface Enrollment {
  user: string;
  course: string;
}

// Define initial state, loading from localStorage if available
const initialEnrollments: Enrollment[] = JSON.parse(
  localStorage.getItem("enrollments") || "[]"
);

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    enrollments: initialEnrollments,  // Ensure enrollments is initialized
    modules: [],  // Other parts of the state if needed
  },
  reducers: {
    enrollUser: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      const newEnrollment = { user: userId, course: courseId };
      state.enrollments.push(newEnrollment);
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
    unenrollUser: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
      );
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
  },
});

export const { enrollUser, unenrollUser } = coursesSlice.actions;
export default coursesSlice.reducer;