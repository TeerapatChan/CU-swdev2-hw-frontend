'use client'
import {Select, MenuItem} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function BookingForm() {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        <h1 className="text-3xl font-bold">Book a Vaccination Appointment</h1>
        <div className="w-[30%] flex flex-col bg-slate-100 h-auto p-6 rounded-xl gap-3">
          <p className="text-base font-semibold">First Name</p>
          <input type="text" className="rounded-md outline-slate-300 outline outline-[0.25px] pl-2 h-9"/>
          <p className="text-base font-semibold">Last Name</p>
          <input type="text" className="rounded-md outline-slate-300 outline outline-[0.25px] pl-2 h-9"/>
          <p className="text-base font-semibold">ID Card</p>
          <input type="text" className="rounded-md outline-slate-300 outline outline-[0.25px] pl-2 h-9"/>
          <div className="flex flex-row gap-48">
            <p className="text-base font-semibold">Date</p>
            <p className="text-base font-semibold">Location</p>
          </div>
          <div className="flex flex-row gap-6">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="dd/mm/yyyy"
              slotProps={{ textField: { size: 'small' } }}
              className="text-base w-[45%] items-center bg-white"
            />
            </LocalizationProvider>
            <Select variant="standard" className="text-sm min-w-[45%] max-w-[45%] items-center bg-white rounded-md pl-2 outline-slate-300 outline outline-[0.25px]" name="location">
              <MenuItem value="Chulalongkorn Hospital" className=" text-sm">Chulalongkorn Hospital</MenuItem>
              <MenuItem value="Rajavithi Hospital" className=" text-sm">Rajavithi Hospital</MenuItem>
              <MenuItem value="Thammasat University Hospital" className=" text-sm">Thammasat University Hospital</MenuItem>
            </Select>
          </div>
          <form className="flex justify-center mt-3" >
            <button
              type="submit"
              className="flex w-1/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Booking
            </button>
          </form>
        </div>
      </div>
    )
  }
  