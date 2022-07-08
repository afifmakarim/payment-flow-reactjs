import React from "react";
import AmountFormatter from "../utils/AmountFormatter";

export default function TotalSummary({ isUseVoucher, discount, subTotal }) {
  const deliveryFee = 8000;
  const useVoucher = isUseVoucher ? discount : 0;
  const countTotal = () => {
    const actualPayment = subTotal + deliveryFee;
    const discounted_price = actualPayment - (actualPayment * useVoucher) / 100;

    return discounted_price;
  };

  return (
    <div className="flex flex-col gap-2 text-blue pt-8">
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium">Total</span>
        <span>{AmountFormatter.format(subTotal)}</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium">Delivery Charge</span>
        <span>{AmountFormatter.format(deliveryFee)}</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium">Discount</span>
        <span>-{useVoucher} %</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">Subtotal</span>
        <span className="text-lg">{AmountFormatter.format(countTotal())}</span>
      </div>
    </div>
  );
}
