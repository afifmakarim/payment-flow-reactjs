import React, { useState } from "react";
import PaymentMethodList from "./PaymentMethodList";

function DropdownButton({ data, title, content }) {
  const [shown, setShown] = useState(true);

  const handleClick = (event) => {
    event.preventDefault();
    setShown(!shown);
  };
  return (
    <>
      <button onClick={handleClick} className="flex items-center gap-2 mt-8">
        <div className="text-sm font-medium">{title}</div>
        {shown ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-2 w-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-2 w-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </button>
      {shown && <PaymentMethodList data={data} filter={content} />}
    </>
  );
}

export default DropdownButton;
