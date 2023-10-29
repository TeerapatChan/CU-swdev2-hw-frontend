"use client";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { cancelBooking } from "@/redux/features/bookSlice";

export default function ShowBooking() {
  const dispatch = useDispatch<AppDispatch>();
  const bookingItem = useAppSelector((state) => state.bookSlice.bookingItem);
  if (!bookingItem) {
    return (
      <div className="font-bold text-2xl bg-slate-300 p-5 mt-10 rounded-lg w-1/3 text-center">
        No Vaccine Booking
      </div>
    );
  }
  return (
    <div className="bg-slate-200 m-5 rounded-lg shadow-sm w-1/4 p-5 flex flex-col items-center gap-5">
      <div className="flex flex-row gap-2">
        <p className="font-semibold">First Name : </p>
        <p>{bookingItem.fName}</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="font-semibold">Last Name : </p>
        <p>{bookingItem.lName}</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="font-semibold">ID Card : </p>
        <p>{bookingItem.idCard}</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="font-semibold">Location : </p>
        <p>{bookingItem.hospital}</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="font-semibold">Booking Date : </p>
        <p>{bookingItem.bookingDate}</p>
      </div>

      <button
        className="flex w-1/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => dispatch(cancelBooking())}
      >
        Cancel Booking
      </button>
    </div>
  );
}
