import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import React from "react";
import { Link } from "react-router-dom";

export default function KanbasNavigation() {
  return (
    <div 
      id="wd-kanbas-navigation" 
      style={{ width: 120 }} 
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a 
        id="wd-neu-link" 
        target="_blank" 
        rel="noopener noreferrer" // Added for security
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
        aria-label="Northeastern University website"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University Logo" /> {/* Added alt text */}
      </a>
      
      <Link 
        to="/Kanbas/Account" 
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
        aria-label="Account"
      >
        <FaRegCircleUser className="fs-1 text text-white" /><br />
        Account 
      </Link>
      
      <Link 
        to="/Kanbas/Dashboard" 
        id="wd-dashboard-link"
        className="list-group-item text-center border-0 bg-white text-danger"
        aria-label="Dashboard"
      >
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard 
      </Link>
      
      <Link 
        to="/Kanbas/Courses"
        id="wd-course-link"
        className="list-group-item text-white bg-black text-center border-0"
        aria-label="Courses"
      >
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses 
      </Link>
      
      <Link 
        to="/Kanbas/Calendar" 
        id="wd-calendar-link"
        className="list-group-item text-white bg-black text-center border-0"
        aria-label="Calendar"
      >
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Calendar 
      </Link>
      
      <Link 
        to="/Kanbas/Inbox" 
        id="wd-inbox-link"
        className="list-group-item text-white bg-black text-center border-0"
        aria-label="Inbox"
      >
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Inbox 
      </Link>
      
      <Link 
        to="/Labs" 
        id="wd-labs-link"
        className="list-group-item text-white bg-black text-center border-0"
        aria-label="Labs"
      >
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Labs 
      </Link>
    </div>
  );
}

export {};
