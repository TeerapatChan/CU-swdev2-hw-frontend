"use client";
import { Select, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useState } from "react";

export default function LocationDate({
  onDateChange,
  onLocationChange,
}: {
  onDateChange: (value: Dayjs | null) => void;
  onLocationChange: (value: string) => void;
}) {
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [location, setLocation] = useState<string>("");
  return (
    <div className="flex flex-row gap-10">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="dd/mm/yyyy"
          slotProps={{ textField: { size: "small" } }}
          className="text-base w-[45%] items-center bg-white"
          onChange={(e: Dayjs | null) => {
            setBookingDate(e);
            onDateChange(e);
          }}
          value={bookingDate}
        />
      </LocalizationProvider>
      <Select
        variant="standard"
        className="text-sm min-w-[45%] max-w-[45%] items-center bg-white rounded-md pl-2 outline-slate-300 outline outline-[0.25px]"
        name="location"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
          onLocationChange(e.target.value);
        }}
      >
        <MenuItem value="Chulalongkorn Hospital" className=" text-sm">
          Chulalongkorn Hospital
        </MenuItem>
        <MenuItem value="Rajavithi Hospital" className=" text-sm">
          Rajavithi Hospital
        </MenuItem>
        <MenuItem value="Thammasat University Hospital" className=" text-sm">
          Thammasat University Hospital
        </MenuItem>
      </Select>
    </div>
  );
}
