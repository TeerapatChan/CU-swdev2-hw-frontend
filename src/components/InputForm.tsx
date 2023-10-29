"use client";
import { useState } from "react";

export default function InputForm({
  onFNameChange,
  onLNameChange,
  onIdCardChange,
}: {
  onFNameChange: (value: string) => void;
  onLNameChange: (value: string) => void;
  onIdCardChange: (value: string) => void;
}) {
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [idCard, setIdCard] = useState<string>("");

  return (
    <div className="flex flex-col gap-3">
      <p className="text-base font-semibold">First Name</p>
      <input
        type="text"
        className="rounded-md outline-slate-300 outline outline-[0.25px] pl-2 h-9 w-full"
        onChange={(e) => {
          setFName(e.target.value);
          onFNameChange(e.target.value);
        }}
        value={fName}
      />
      <p className="text-base font-semibold">Last Name</p>
      <input
        type="text"
        className="rounded-md outline-slate-300 outline outline-[0.25px] pl-2 h-9 w-full"
        onChange={(e) => {
          setLName(e.target.value);
          onLNameChange(e.target.value);
        }}
        value={lName}
      />
      <p className="text-base font-semibold">ID Card</p>
      <input
        type="text"
        className="rounded-md outline-slate-300 outline outline-[0.25px] pl-2 h-9 w-full"
        onChange={(e) => {
          setIdCard(e.target.value);
          onIdCardChange(e.target.value);
        }}
        value={idCard}
      />
      <div className="flex flex-row gap-48">
        <p className="text-base font-semibold">Date</p>
        <p className="text-base font-semibold">Location</p>
      </div>
    </div>
  );
}
