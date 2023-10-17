'use client'
import Image from "next/image";
import styles from "./banner.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {useSession} from "next-auth/react";

export default function Banner() {
    const BannerList = ["/img/banner.jpg", "/img/banner2.jpg", "/img/banner3.jpg","/img/banner4.jpg"]
    const [showBanner, setShowBanner] = useState(0);
    const router = useRouter();
    const session = useSession().data;

    return (
        <div className={`hover:cursor-pointer ${styles.banner}`} onClick={() => {setShowBanner(showBanner+1)}}>
            <Image
                src={BannerList[showBanner % BannerList.length]}
                alt="vaccine-banner"
                layout="fill"
                priority objectFit="cover"
            />
            {
                session ? <div className='z-1 absolute right-10 top-5 font-semibold text-white text-3xl p-3 
                bg-gray-900 rounded-xl'>Hello {session.user?.name}</div> :
                null
            }
            <div className={styles.bannerText}>
                <h1>Vaccine</h1>
                <h3>Get vaccinated today!</h3>
            </div>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center 
            inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            absolute bottom-0 right-0 m-5" onClick={(e)=>{e.stopPropagation();e.preventDefault(); router.push('/hospital')}}>
                Choose a hospital
                <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
            </div>
    );
};