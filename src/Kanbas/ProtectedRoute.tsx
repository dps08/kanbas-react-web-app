// src/Kanbas/ProtectedRoute.tsx

import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { cid } = useParams<{ cid: string }>();
  const { currentUser } = useSelector((state: any) => state.account);
  const { enrollments } = useSelector((state: any) => state.courses);

  // Check if the current user is enrolled in the course
  const isEnrolled = enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser._id && enrollment.course === cid
  );

  if (!isEnrolled) {
    return <Navigate to="/Kanbas/Dashboard" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
