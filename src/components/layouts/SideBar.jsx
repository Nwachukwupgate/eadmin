// Sidebar.js
import React from 'react';
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block ">
      <div className="flex h-full max-h-screen flex-col gap-2">
        {/* Sidebar Header */}
        <div className="flex h-[60px] items-center border-b px-6">
          <div className="flex items-center gap-2 font-semibold" >
          
            {/* E-Shop Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            <span>E-Shop</span>
         
          </div>
        </div>
        {/* Sidebar Navigation */}
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {/* Home Link */}
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Home
            </a>
            {/* Create Product Link */}
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900" href="/create">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
              </svg>
              Create Product
            </a>

            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900" href="/projects">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
              </svg>
              View Project
            </a>

            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900" href="/project">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
              </svg>
              Create Project
            </a>           
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
