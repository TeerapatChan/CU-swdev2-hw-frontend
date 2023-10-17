import Image from "next/image"
import MenuItem from "./MenuItem"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function MenuBar() {
    const session = await getServerSession(authOptions);
    
    return (
        <div className="fixed top-0 inset-0 z-10 h-14 flex-row bg-gray-900 p-1.5">
            <div className="justify-between flex-row flex pr-5 gap-5">
                <div className="pt-3 pl-3">
                    {
                        session ? <MenuItem title="Sign-Out" pageRef="/api/auth/signout" />:
                        <MenuItem title="Sign-In" pageRef="/api/auth/signin" />
                    }
                    
                </div>
                
                <div className="justify-end flex-row flex pr-5 gap-5">
                    <MenuItem title="Booking" pageRef="/booking"/>
                    <Image src='/img/logo.png' width={40} height={40} alt="logo"/>
                </div>
                
            </div>
        </div>
    )
}
