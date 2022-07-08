import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function ShippingAddress({ data }) {
  return (
    <>
      <SectionTitle title="Shipping Address" />
      <div className="shipping-wrapper flex flex-row gap-4 items-start text-xs">
        <div className="location-icons border rounded-full p-2 bg-lowBlue">
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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-[12px] text-slate tracking-wide">
          <div className="shipping-details leading-5">
            <p>{data.address.name}</p>
            <p>+{data.address.msisdn}</p>
          </div>
          <p>{data.address.alamat}</p>
        </div>
      </div>
    </>
  );
}
