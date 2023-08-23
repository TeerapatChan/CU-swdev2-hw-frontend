import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image
                src="/img/banner.jpg"
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