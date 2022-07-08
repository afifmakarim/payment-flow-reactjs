import React, { useState } from "react";
import { slice, concat } from "lodash";

export default function PaymentMethodList({ data, filter }) {
  const filterData = data.paymentMethod.filter((item) => item.type === filter);
  const length = filter ? filterData.length : data.paymentMethod.length;
  const allData = filter ? [...filterData] : [...data.paymentMethod];
  const limit = 2;

  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(allData, 0, limit));
  const [index, setIndex] = useState(limit);

  const loadMore = () => {
    const newIndex = index + limit;
    const newShowMore = newIndex < length - 1;
    const newList = concat(list, slice(allData, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };

  return (
    <>
      <div className="flex flex-col">
        {list.map((item, index) => (
          <div
            key={index}
            className="bg-lowBlue p-4 mt-4 relative rounded-lg cursor-pointer"
          >
            <input
              type="radio"
              name="paymentMethod"
              id={`payment-${index}`}
              className="absolute top-7 right-6 p-4 w-4 h-4"
            />
            <label
              htmlFor={`payment-${index}`}
              className="flex items-center gap-4 border-stroke"
            >
              <img
                src="https://picsum.photos/200"
                alt=""
                className="w-6 h-6 rounded-md"
              />
              <div className="flex flex-col">
                <p>{item.name}</p>
                <p className="text-xs text-slate">{item.description}</p>
              </div>
            </label>
          </div>
        ))}
      </div>
      {showMore && allData.length > 2 && (
        <div className="flex justify-center">
          <button
            className="text-base font-light py-2 px-4 rounded-lg bg-lowBlue mt-6 "
            onClick={loadMore}
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
}
