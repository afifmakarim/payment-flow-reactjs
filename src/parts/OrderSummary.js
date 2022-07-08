import React, { useState } from "react";
import OrderSummaryList from "../components/OrderSummaryList";
import SectionTitle from "../components/SectionTitle";

export default function OrderSummary({ data }) {
  return (
    <>
      <SectionTitle title="Order Summary" />
      <OrderSummaryList data={data} />
    </>
  );
}
