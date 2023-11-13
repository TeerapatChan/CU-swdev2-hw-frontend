import { useEffect,useRef } from "react";
export default function VideoPlayer({videoSrc, isPlaying} : {videoSrc:string, isPlaying:boolean}){

    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (videoRef.current === null) return;
        if (isPlaying) {
            videoRef.current?.play();
        }else{
            videoRef.current?.pause();
        }
    }, [isPlaying])

    return(
        <video src={videoSrc} ref={videoRef} controls loop muted></video>
    )
}