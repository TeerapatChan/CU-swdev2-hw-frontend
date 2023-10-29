"use client";
import LocationDate from "@/components/LocationDate";
import InputForm from "@/components/InputForm";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../interfaces";
import { addBooking } from "@/redux/features/bookSlice";

export default function BookingForm() {
  const dispatch = useDispatch<AppDispatch>();

  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [location, setLocation] = useState<string>("");
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [idCard, setIdCard] = useState<string>("");

  const makeBooking = () => {
    if (bookingDate && location) {
      const booking: BookingItem = {
        fName: fName,
        lName: lName,
        idCard: idCard,
        bookingDate: bookingDate.format("DD/MM/YYYY"),
        hospital: location,
      };
      dispatch(addBooking(booking));
    }
  };

  return (
    <div className="w-[30%] flex flex-col bg-slate-100 h-auto p-6 rounded-xl gap-3">
      <InputForm
        onFNameChange={(value) => setFName(value)}
        onLNameChange={(value) => setLName(value)}
        onIdCardChange={(value) => setIdCard(value)}
      />
      <LocationDate
        onDateChange={(value: Dayjs | null) => setBookingDate(value)}
        onLocationChange={(value: string) => setLocation(value)}
      />
      <div className="flex justify-center mt-3">
        <button
          className="flex w-1/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={makeBooking}
        >
          Booking
        </button>
      </div>
    </div>
  );
}
