'use client'
import VideoPlayer from "./VideoPlayer"
import { useState } from "react";
import {useWindowListener} from "../hooks/useWindowListener"

export default function PromoteCard(){
    const [playing, setPlaying] = useState(true);

    useWindowListener('contextmenu', (e)=>{
        e.preventDefault();
    })

    return (
        <div className="h-[20rem] shadow-lg mx-[10%] my-10 p-5 rounded-lg bg-gray-200
        flex flex-row gap-5">
            <VideoPlayer videoSrc="/video/getvaccine.mp4" isPlaying={playing}></VideoPlayer>
            <div className="flex flex-col gap-5">
                <div className="text-xl font-semibold">Get your vaccine today!</div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-3 py-1 text-center 
             dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-20"
             onClick={()=>{setPlaying(!playing)}}>
                   {playing? 'Pause':'Play'}
                </button>
            </div>
        </div>
    )
}