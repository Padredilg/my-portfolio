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
                    
                    <h6>I develop softwares and create websites!</h6>

                    <a className="home-button" href="#About">About Me</a>

                    <a className="home-button version-green" href="#Creations">Creations</a>

                    <a className="home-button version-red" href="#Skills">Skills</a>


                </div>
            </div>

        </div>
    )
}

export default Home2;