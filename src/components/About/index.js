import React from "react";
import euaBrazil from "../../assets/images/eua-brazil.jpg"
import pbscLit from "../../assets/images/pbsc-lit.png"
import ucfLogo from "../../assets/images/UCF-logo2.png"

function About() {
	return (
		<section className="section-light about-section">
			<h1 id='About' className="section-title">Who am I?</h1>

			<div className="about-wrapper">
				<div className="about-box">
					<img className="about-img" src={euaBrazil} alt="USA flag merged with Brazil's flag" />
					<p>
						<span className="indentation">-----</span>I am a Full-Stack Web Developer currently looking for a full-time position. I also happen to be midway-through my path to obtain an Aerospace Engineering Bachelor's Degree from University of Central Florida <span className="obs-text">(Hence the overall theme <span className="obs-smiley">:)</span> )</span>.
					</p>

					<p>
						<span className="indentation">-----</span>I grew up in Sao Paulo, Brazil, and moved to the US back in 2014. I graduated from Monarch High School 2 years later, but, due to financial hardship and other obstacles that I faced as an immigrant, I was unable to start college at the time. Therefore, I joined the work-force and took whatever jobs were available for me. That included: waiter/server, car-wash attendant, construction employee, and night-shift restaurant-cleaner. By November of 2017 I joined Eco Printing Corp. After saving for a year, I was able to start my college career in January of 2019!
					</p>
				</div>

				<div className="about-box">
					<img className="about-img" src={pbscLit} alt="Palm Beach State College Logo" />
					<p>
						<span className="indentation">-----</span>When I started studying at Palm Beach State College I already knew that I would enjoy my STEM classes. However, I fell madly in love with Math when I took the first course of the Calculus trilogy, and at that moment I knew I had to become an Engineer! My efforts at keeping a 4.0 GPA as a <span className="full-word">full</span>-time engineering student and <span className="full-word">full</span>-time worker helped me obtain a <span className="full-word-success">full</span>-scholarship through the PBSC Foundation, and I will be forever grateful for their help.
					</p>
				</div>

				<div className="about-box">
				<img className="about-img" src={ucfLogo} alt="UCF Logo" />

					<p>
						<span className="indentation">-----</span>After obtaining my AA at PBSC, I became a <span className="ucf-knight">UCF Knight</span> to further pursue my education as an Aerospace Engineer. One of the required courses towards my major was Intro to C, and it was then that I met coding, the second passion of my life. While I am still an Aerospace Engineering student, I decided to expand my coding experience by enrolling in the UCF Web Development Bootcamp, and that is how I became a Full-Stack Web Developer while still pursuing an Aerospace Engineering Degree.
					</p>
				</div>

				<a href="#Creations" className="check-projects">Check my Creations</a>

			</div>
		</section>
	);
}

export default About;