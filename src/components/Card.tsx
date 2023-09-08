import Image from "next/image";
import InteractiveCard from './InteractiveCard'

export default function Card({hospitalName, imgSrc}: {hospitalName: string, imgSrc: string}) {
    return (
        <InteractiveCard>
            <div className='w-full h-4/6 rounded-lg overflow-hidden relative mb-2'>
                <Image src={imgSrc} alt={hospitalName} fill={true} objectFit="cover"/>
            </div>
            <div className='text-center text-lg font-bold'>
                <h3>{hospitalName}</h3>
            </div>
        </InteractiveCard>
    );
};
