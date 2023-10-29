import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import BookingForm from "@/components/BookingForm";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] gap-10">
      <div className="flex flex-col gap-3 mt-24">
        <div className="text-center text-3xl font-bold">
          Welcome {profile.data.name}
        </div>
        <p className="mt-3">
          <span className="font-bold">Email :</span> {profile.data.email}
        </p>
        <p>
          <span className="font-bold">Tel. :</span> {profile.data.tel}
        </p>
        <p>
          <span className="font-bold">Member Since :</span>{" "}
          {createdAt.toString()}
        </p>
      </div>
      <h1 className="text-3xl font-bold">Book a Vaccination Appointment</h1>
      <BookingForm />
    </div>
  );
}
