import Image from "next/image"
import MenuItem from "./MenuItem"

export default function MenuBar() {
    return (
        <div className="fixed top-0 inset-0 z-10 h-14 flex-row bg-gray-900 p-1.5">
            <div className="justify-end flex-row flex pr-5 gap-5">
                <MenuItem title="Booking" pageRef="/booking"></MenuItem>
                <Image src='/img/vaccine-6592893_1280.png' width={40} height={40} alt="logo"></Image>
            </div>
        </div>
    )
}
