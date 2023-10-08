import Image from "next/image";
import InteractiveCard from './InteractiveCard'
import { Rating } from "@mui/material";

export default function Card({ hospitalName, imgSrc, rating, setRating }: { hospitalName: string, imgSrc: string, rating?: number, setRating?: Function }) {
    return (
        <InteractiveCard>
            <div className='w-full h-4/6 rounded-lg overflow-hidden relative mb-2'>
            <Image src={imgSrc} alt={hospitalName} fill={true} objectFit="cover" />
            </div>
            <div className="flex flex-col items-center gap-2">
            <div className='text-center text-lg font-bold'>
                <h3>{hospitalName}</h3>
            </div>
            {
                setRating ? <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                event.stopPropagation();
                setRating(newValue || 0);
                }}
                onClick={(event) => event.stopPropagation()}/> : ""
            }
            </div>
        </InteractiveCard>
    );
  };
  
