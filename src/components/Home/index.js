import fallingStars from '../../assets/video/FallingStars.mp4';

const Home2 = ()=>{
    
    return(
        <div class="main-banner" id="Home">
        
            <video autoPlay muted loop id="bg-video">
                <source src={fallingStars} type="video/mp4" />
            </video>

            <div class="video-overlay header-text">
                <div class="caption">
                    <h6>( Full Stack Developer )</h6>
                    <h2>Hi, I'm <em>Luiz</em></h2>
                    <h6>I develop softwares and create websites ;)</h6>
                    <div class="main-button">
                        <a href="#About">Would you like to know more about me?</a>
                    </div>
                    <div class="second-button">
                        <a href="#Creations">Would you like to check my Creations?</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home2;