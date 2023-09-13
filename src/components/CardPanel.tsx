'use client'
import Card from './Card';
import { useState, useReducer } from "react";


export default function CardPanel() {
  function ratingReducer(ratingMap:Map<string,number>, action:{type:string, hospitalName:string, rating:number}) {
    switch (action.type) {
      case 'setRating':
          return new Map(ratingMap.set(action.hospitalName, action.rating));
      case 'remove':
          const newRatingMap = new Map(ratingMap);
          newRatingMap.delete(action.hospitalName);
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

  return (
    <div>
        <div className='flex flex-row flex-wrap mr-15 ml-15 mt-8 mb-8 justify-center'>
            <Card hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg' rating={ratingMap.get('Chulalongkorn Hospital') || 0} setRating={(rating:number) => dispatch({ type: 'setRating', hospitalName: 'Chulalongkorn Hospital', rating })} />
            <Card hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg' rating={ratingMap.get('Rajavithi Hospital') || 0} setRating={(rating:number) => dispatch({ type: 'setRating', hospitalName: 'Rajavithi Hospital', rating })} />
            <Card hospitalName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg' rating={ratingMap.get('Thammasat University Hospital') || 0} setRating={(rating:number) => dispatch({ type: 'setRating', hospitalName: 'Thammasat University Hospital', rating })} />
        </div>
        <div className="flex flex-col gap-5 items-center mb-5">{Array.from(ratingMap).map(([hospitalName, rating]:[string,number]) => <div key={hospitalName}
        onClick={() => dispatch({type: 'remove', hospitalName: hospitalName, rating:0})} 
        className='text-lg rounded-md hover:bg-slate-300 p-1 hover:cursor-pointer'>
            <strong>{hospitalName}</strong>: {rating}</div>)}
        </div>
    </div>
  );
}
