import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import React from "react";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <BsPlus className="fs-4 me-2" /> {/* Add margin-end for spacing */}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
