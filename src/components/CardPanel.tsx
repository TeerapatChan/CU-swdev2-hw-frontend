'use client'
import Card from './Card';
import { useReducer } from "react";
import Link from 'next/link';

export default function CardPanel() {
  function ratingReducer(ratingMap:Map<string,number>, action:{type:string, name:string, rating:number}) {
    switch (action.type) {
      case 'setRating':
          return new Map(ratingMap.set(action.name, action.rating));
      case 'remove':
          const newRatingMap = new Map(ratingMap);
          newRatingMap.delete(action.name);
          console.log(newRatingMap);
          return newRatingMap;
      default:
        return ratingMap;
    }
  }
  const [ratingMap, dispatch] = useReducer(ratingReducer, new Map([
    ['Chulalongkorn Hospital', 0],
    ['Rajavithi Hospital', 0],
    ['Thammasat University Hospital', 0]
  ]));
  const mockData = [
    {
      id: '001',
      name: 'Chulalongkorn Hospital',
      img: '/img/chula.jpg',
    },
    {
      id: '002',
      name: 'Rajavithi Hospital',
      img: '/img/rajavithi.jpg',
    },
    {
      id: '003',
      name: 'Thammasat University Hospital',
      img: '/img/thammasat.jpg',
    },
  ]
  
  return (
    <div>
        <div className='flex flex-row flex-wrap mr-15 ml-15 mt-8 mb-8 justify-center gap-20'>
            {
              mockData.map((hospital) => (
                <Link href={`/hospital/${hospital.id}`} key={hospital.name} className='w-3/12'>
                  <Card hospitalName={hospital.name} imgSrc={hospital.img} key={hospital.name}
                  setRating={(rating:number) => dispatch({ type: 'setRating', name: hospital.name, rating })}
                  rating={ratingMap.get(hospital.name) || 0}/>
                </Link>
              ))
            }
        </div>
        <div className="flex flex-col gap-5 items-center mb-5">{Array.from(ratingMap).map(([name, rating]:[string,number]) => <div key={name}
        onClick={() => dispatch({type: 'remove', name: name, rating:0})} 
        className='text-lg rounded-md hover:bg-slate-300 p-1 hover:cursor-pointer'>
            <strong>{name}</strong>: {rating}</div>)}
        </div>
    </div>
  );
}
