import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
    return (
        <section className="section" id="Skills">
            <Container>
                <Row>

                    <Col lg={7} className="section-title">
                        <div className="section-heading">
                            <h2>Skil<em>ls</em></h2>
                            <p>Checkout some of the skills and languages that I have gathered and can offer on projects that I work!</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={11} sm={7} md={4}>
                        
                        <div>
                            <h3>Front-End Skills</h3>
                        </div>

                        <div>
                            
                        </div>

                    </Col>
                    <Col xs={11} sm={7} md={4}>
                        
                        <div>
                            <h3>Back-End Skills</h3>
                        </div>

                        <div>
                            
                        </div>

                    </Col>
                    <Col xs={11} sm={7} md={4}>
                        
                        <div>
                            <h3>Techniques</h3>
                        </div>

                        <div>
                            
                        </div>

                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Skills;