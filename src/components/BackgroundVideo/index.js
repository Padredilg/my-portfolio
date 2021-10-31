import React from "react";

const BackgroundVideo = () => {
    const videoSource = "./FallingStars.mp4"
    return(
        <video autoPlay loop muted className="bg-vid">
            <source src={videoSource} type="video/mp4" />
        </video>
    )
}

export default BackgroundVideo;