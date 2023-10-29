import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookingState = {
  bookingItem: BookingItem | null;
};

const initialState: BookingState = {
  bookingItem: null,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      state.bookingItem = action.payload;
    },
    cancelBooking: (state) => {
      state.bookingItem = null;
    },
  },
});

export const { addBooking, cancelBooking } = bookSlice.actions;
export default bookSlice.reducer;
