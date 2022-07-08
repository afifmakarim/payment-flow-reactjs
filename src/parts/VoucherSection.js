import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function VoucherSection({
  handleVoucherChange,
  enableVoucher,
  handleUseVoucher,
}) {
  return (
    <>
      <SectionTitle title="Voucher" />
      <div className="flex">
        <input
          className="py-[8px] px-[16px] rounded-lg grow"
          type="text"
          name="voucher"
          id="voucher"
          placeholder="Enter voucher code ..."
          onChange={handleVoucherChange}
          maxLength="7"
          disabled={enableVoucher}
        />
        <button
          className={`ml-2 py-[8px] px-[16px] ${
            enableVoucher ? "bg-red text-white" : "bg-lowBlue"
          } rounded-lg grow-0`}
          onClick={handleUseVoucher}
        >
          {enableVoucher ? "Cancel" : "Use"}
        </button>
      </div>
    </>
  );
}
