import Image from "next/image";

export default function Card({hospitalName, imgSrc}: {hospitalName: string, imgSrc: string}) {
    return (
        <div className='w-3/12 h-80 bg-white shadow-md rounded-xl p-4 m-4'>
            <div className='w-full h-4/6 rounded-lg overflow-hidden relative mb-2'>
                <Image src={imgSrc} alt={hospitalName} fill={true} objectFit="cover"/>
            </div>
            <div className='text-center text-lg font-bold'>
                <h3>{hospitalName}</h3>
            </div>
        </div>
    );
};
