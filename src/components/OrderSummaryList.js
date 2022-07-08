import React from "react";
import AmountFormatter from "../utils/AmountFormatter";

export default function OrderSummaryList({ data }) {
  return (
    <>
      {data.items.map((item, key) => {
        return (
          <div className="items flex justify-between items-center py-2">
            <div className="item-wrapper flex justify-between gap-4">
              <img
                className="w-20 h-20 rounded-md"
                src="https://picsum.photos/200"
                alt="item"
              />
              <div className="item-details flex flex-col justify-between">
                <div className="item-title">
                  <h4 className="text-base">{item.name}</h4>
                  <p className="text-xs text-slate">{item.description}</p>
                </div>
                <h4 className="price">{AmountFormatter.format(item.amount)}</h4>
              </div>
            </div>
            <p className="item-total font-bold">x {item.qty}</p>
          </div>
        );
      })}
    </>
  );
}
