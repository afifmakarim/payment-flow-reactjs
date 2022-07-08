import React from "react";
import Button from "../components/Button";
import { Navigate } from "react-router-dom";

export default function SuccessPage() {
  return (
    <div className="App flex flex-col justify-center">
      <img src="https://picsum.photos/400" alt="" className="rounded-lg" />
      <Button title={"Track Order Status"} to={"#"} />
      <Button title={"Back to Home"} isSecondary={true} to={"/checkout"} />
    </div>
  );
}
