import React from "react";
import Button from "../components/Button";

export default function SuccessPage() {
  return (
    <div className="App flex flex-col justify-center">
      <img src="https://picsum.photos/400" alt="" className="rounded-lg" />
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-2xl font-semibold p-4">Payment Success</h4>
        <p className="text-center text-slate">
          Your payment was successful!
          <br /> Just wait your order arrive at home
        </p>
      </div>
      <Button title={"Track Order Status"} to={"#"} />
      <Button title={"Back to Home"} isSecondary={true} to={"/checkout"} />
    </div>
  );
}
