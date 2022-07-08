import React from "react";
import Head from "../components/Head";
import data from "../data/DummyDatas";
import DropdownButton from "../components/DropdownButton";
import Button from "../components/Button";

export default function PaymentMethod() {
  return (
    <div className="App">
      <Head title="Payment" />
      <DropdownButton
        data={data}
        title={"Bank Transfer"}
        content={"Bank Transfer"}
      />
      <DropdownButton data={data} title={"E-Wallet"} content={"ewallet"} />
      <Button title="Confirm Payment" to={"/success"} />
    </div>
  );
}
