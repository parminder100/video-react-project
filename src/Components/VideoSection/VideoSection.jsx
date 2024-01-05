import { useRef, useState } from "react";
import video from "../../asset/video/video.mp4";
import "../VideoSection/VideoSection.css";

const VideoSection = () =>{
    const [videoBtn, setVideoBtn] = useState(false);
    const videoStatus = useRef();

    const handleVideoBtn = () =>{
        setVideoBtn(!videoBtn);
        if(videoStatus.current.paused){
            videoStatus.current.play()
        }
        else{
            videoStatus.current.pause()
        }
    }
    return(
        <>
            <main className="video__main">
                <section className="video__section">
                    <video muted loop autoPlay className="video__container" ref={videoStatus}>
                        <source src={video} type="video/mp4" />
                    </video>
                    <h1 className="video__project__heading">Video Project</h1>
                    <button className={`switch__btn ${videoBtn ? 'slide' : ''}`} onClick={handleVideoBtn}>
                        <span>play</span>
                        <span>pause</span>
                        <span className="switch"></span>
                    </button>
                </section>
            </main>
        </>
    )
}
export default VideoSection;