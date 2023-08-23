import Image from "next/image";
import styles from "./card.module.css";

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src="/img/card-1.jpg" alt="Pfizer" fill={true} objectFit="cover"/>
            </div>
            <div className={styles.cardText}>
                <h3>Pfizer-BioNTech (Covid-19 Vaccine)</h3>
                <p>The Pfizer-BioNTech vaccine utilizes mRNA technology to stimulate the body's immune system. The vaccine is administered by injecting it into the muscle in the arm. Vaccine recipients are required to receive two doses. The interval between the first and second doses depends on the recommendations of health organizations.</p>
            </div>

        </div>
    );
};
