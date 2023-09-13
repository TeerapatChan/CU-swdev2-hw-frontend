'use client'
import Image from "next/image";
import styles from "./banner.module.css";
import { useState } from "react";

export default function Banner() {
    const BannerList = ["/img/banner.jpg", "/img/banner2.jpg", "/img/banner3.jpg","/img/banner4.jpg"]
    const [showBanner, setShowBanner] = useState(0)

    return (
        <div className={`hover:cursor-pointer ${styles.banner}`} onClick={() => {setShowBanner(showBanner+1)}}>
            <Image
                src={BannerList[showBanner % BannerList.length]}
                alt="vaccine-banner"
                layout="fill"
                priority objectFit="cover"
            />
            <div className={styles.bannerText}>
                <h1>Vaccine</h1>
                <h3>Get vaccinated today!</h3>
            </div>
        </div>
    );
};