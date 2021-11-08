import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";



const Skills = () => {

    const [frontEnd] = useState([
        {
          image: 'html'
        },
        {
          image: 'css'
        },
        {
          image: 'javascript'
        },
        {
          image: 'jquery'
        },
        {
          image: 'handlebars'
        },
        {
          image: 'react'
        }
    ]);
    const [backEnd] = useState([
        {
          image: 'c'
        },
        {
          image: 'node'
        },
        {
          image: 'express'
        },
        {
          image: 'mysql'
        },
        {
          image: 'sequelize'
        },
        {
          image: 'mongodb'
        },
        {
          image: 'mongoose'
        },    
    ]);
    const [techniques] = useState([
        {
          technique: 'Git Workflow'
        },
        {
          technique: 'Object Oriented Program'
        },
        {
          technique: 'Test Driven Development'
        },
        {
          technique: 'Agile Development'
        },
        {
          technique: 'Dev Ops'
        }
    ]);

    return (
        <section className="section" id="Skills">
            <Container>

                <Row>
                    <Col lg={7} className="section-title">
                        <div className="section-heading">
                            <h2>Skil<em>ls</em></h2>
                            <p className="skills-intro">Checkout some of the skills and languages that I have gathered and can offer on projects that I work!</p>
                        </div>
                    </Col>
                </Row>

                <Row className="skills-container">
                    <Col lg={11} xl={3} className="skills-wrapper">
                        <h3 className="skills-title">Front-End Skills</h3>

                        <div className="skills-images">
                            {frontEnd.map((tech) => (
                                
                                    <img
                                        src={require(`../../assets/links/${tech.image}.png`).default}
                                        alt={tech.image}
                                        className="tech-symbol"
                                        key={tech.image}
                                    />
                                
                            ))}
                        </div>
                    </Col>

                    <Col lg={11} xl={3} className="skills-wrapper">
                        <h3 className="skills-title">Back-End Skills</h3>

                        <div className="skills-images">
                            {backEnd.map((tech) => (
                                
                                    <img
                                        src={require(`../../assets/links/${tech.image}.png`).default}
                                        alt={tech.image}
                                        className="tech-symbol"
                                        key={tech.image}
                                    />
                                
                            ))}
                        </div>
                    </Col>

                    <Col lg={11} xl={3} className="skills-wrapper">
                        <h3 className="skills-title">Techniques</h3>

                        <div className="skills-images">
                            <ul>
                            {techniques.map((technique) => (
                                <li className="listed-skills">
                                    {technique.technique}
                                </li>
                            ))}
                            </ul>
                        </div>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <a href='../../assets/resumes/colored-resume' download>Click to download</a>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Skills;