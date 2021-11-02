import React from "react";
import backgroundVideo from '../BackgroundVideo/FallingStars.mp4';

import profilePic from '../../assets/images/profile-pic-helmet.png'

const Home = () =>{
    return(
        <div className="home">
            
            <img className="profile-pic" src={profilePic} alt="Luiz" />
            <div className="greeting">
                <h1><span>Hi,</span> I'm Luiz!</h1>
                <h2>I develop softwares and create websites ;)</h2>
            </div>
            <a className="know-more" href="#About">Would you like to know more about me?</a>
        </div>
    )
}

export default Home;

