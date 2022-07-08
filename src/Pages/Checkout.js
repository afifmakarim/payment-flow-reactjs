import React, { useState, useEffect } from "react";
import Head from "../components/Head";
import ShippingAddress from "../parts/ShippingAddress";
import OrderSummary from "../parts/OrderSummary";
import TotalSummary from "../parts/TotalSummary";
import VoucherSection from "../parts/VoucherSection";
import Button from "../components/Button";
import DummyData from "../data/DummyDatas";

export default function Checkout() {
  const [data, setData] = useState(DummyData);
  const [enableVoucher, setEnableVoucher] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [voucherValue, setVoucherValue] = useState("");

  const countCartTotal = () => {
    const itemTotal = data.items.map((item) => item.amount * item.qty);
    const subTotal = itemTotal.reduce((a, b) => a + b, 0);
    return { itemTotal, subTotal };
  };

  const handleVoucherChange = (event) => {
    const inputVoucher = event.target.value.toUpperCase();
    setVoucherValue(inputVoucher);
  };

  const handleUseVoucher = (event) => {
    event.preventDefault();
    setEnableVoucher(!enableVoucher);

    const findVoucher = data.voucherCode.find((i) => {
      if (i.code === voucherValue) {
        return true;
      }
      return false;
    });

    if (findVoucher) {
      setDiscount(findVoucher.disc);
    } else {
      setDiscount(0);
    }
  };

  return (
    <div className="App">
      <Head title="Check Out" />
      <ShippingAddress data={data} />
      <OrderSummary data={data} />
      <TotalSummary
        isUseVoucher={enableVoucher}
        discount={discount}
        subTotal={countCartTotal().subTotal}
      />
      <VoucherSection
        handleVoucherChange={handleVoucherChange}
        enableVoucher={enableVoucher}
        handleUseVoucher={handleUseVoucher}
      />
      <Button title="Go to Payment" to={"/payment"} />
    </div>
  );
}
