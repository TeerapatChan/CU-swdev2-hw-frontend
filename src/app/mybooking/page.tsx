import ShowBooking from "@/components/ShowBooking";
export default function myBooking() {
  return (
    <div className="flex justify-center flex-col items-center h-[92vh]">
      <p className="font-bold text-3xl">Your Booking</p>
      <ShowBooking />
    </div>
  );
}
