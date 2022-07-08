import React from "react";
import { useNavigate } from "react-router-dom";

export default function Head({ title }) {
  const navigate = useNavigate();

  return (
    <header className="flex pt-4 items-center text-blue">
      <button
        className="grow-0 back-button p-2 rounded-md border-[1px]"
        onClick={() => navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <h1 className="grow text-md font-medium flex justify-center pr-6">
        {title}
      </h1>
    </header>
  );
}
