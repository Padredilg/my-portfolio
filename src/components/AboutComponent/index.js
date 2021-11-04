import React from "react";

const AboutComponent = () => {
    return (
        <section class="section" id="About">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="section-heading">
                            <h2>About <em>Me</em></h2>
                            {/* <img src="assets/images/line-dec.png" alt="waves"> */}
                            <p>I am very passionate about Math and Coding. My passions led me to pursue an Aerospace Engineering Degree and a Full-Stack Web Development Certificate. Here goes some info about me!</p>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <ul class="features-items">
                            <li class="feature-item">
                                <div class="left-icon">
                                    {/* <img src="assets/images/features-first-icon.png" alt="First One"> */}
                                </div>
                                <div class="right-content">
                                    <h4>How did I end up here?</h4>
                                    <p>I grew up in Sao Paulo, Brazil, and moved to the US back in 2014. I graduated from Monarch High School 2 years later, but, due to financial hardship and other obstacles that I faced as an immigrant, I was unable to start college at the time. Therefore, I joined the work-force and took whatever jobs were available for me. That included: waiter/server, car-wash attendant, construction employee, and night-shift restaurant-cleaner. By November of 2017 I joined Eco Printing Corp. After saving for a year, I was able to start my college career in January of 2019!</p>
                                </div>
                            </li>
                            <li class="feature-item">
                                <div class="left-icon">
                                    {/* <img src="assets/images/features-first-icon.png" alt="second one"> */}
                                </div>
                                <div class="right-content">
                                    <h4>Why Engineering?</h4>
                                    <p>When I started studying at Palm Beach State College I already knew that I would enjoy my STEM classes. However, I fell madly in love with Math when I took the first course of the Calculus trilogy, and at that moment I knew I had to become an Engineer! My efforts at keeping a 4.0 GPA as a <span className="full-word">full</span>-time engineering student and <span className="full-word">full</span>-time worker helped me obtain a <span className="full-word-success">full</span>-scholarship through the PBSC Foundation, and I will be forever grateful for their help.</p>
                                </div>
                            </li>
                            <li class="feature-item">
                                <div class="left-icon">
                                    {/* <img src="assets/images/features-first-icon.png" alt="third gym training"> */}
                                </div>
                                <div class="right-content">
                                    <h4>What Now?</h4>
                                    <p>After obtaining my AA at PBSC, I became a <span className="ucf-knight">UCF Knight</span> to further pursue my education as an Aerospace Engineer. One of the required courses towards my major was Intro to C, and it was then that I met coding, the second passion of my life. While I am still an Aerospace Engineering student, I decided to expand my coding experience by enrolling in the UCF Web Development Bootcamp, and that is how I became a Full-Stack Web Developer while still pursuing an Aerospace Engineering Degree.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default AboutComponent;