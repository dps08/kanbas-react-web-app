// src/Kanbas/Courses/LessonControlButtons.tsx

import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import React from "react";
import { useSelector } from "react-redux";

export default function LessonControlButtons() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <>
      {currentUser?.role === "FACULTY" && (
        <div className="float-end">
          <GreenCheckmark />
          <IoEllipsisVertical className="fs-4" />
        </div>
      )}
    </>
  );
}
