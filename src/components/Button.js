import React from "react";
import { Link } from "react-router-dom";

export default function Button({ title, isSecondary, to }) {
  if (isSecondary) {
    return (
      <button className="text-blue rounded-lg py-4 px-8 flex justify-center bg-lowBlue w-full">
        <Link to={to}>{title}</Link>{" "}
      </button>
    );
  }

  return (
    <button className="text-white border rounded-lg py-4 px-8 flex justify-center bg-blue w-full my-6">
      <Link to={to}>{title}</Link>
    </button>
  );
}
