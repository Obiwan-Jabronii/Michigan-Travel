import React from "react";
import { Container, Card, Row, Col, Image } from 'react-bootstrap';


const SouthReg = () => {
    return(
        <Container>
                    <Row>
                        <Col md={6}>
                            <Card style={{ width: '18rem' }} className="mb=3">
                            {/* <Image src={frankenmuth}
                                className="card-img-top"
                                alt="Frankenmuth"
                                fluid /> */}
                            <Card.Body>
                                <Card.Title><h3> Frankenmuth</h3></Card.Title>
                                <Card.Text>
                                    <p>
                                    Frankenmuth is a city in Michigan, known for its Bavarian-style architecture. The Frankenmuth Historical Museum highlights the area’s German roots.
                                    Michigan’s Military & Space Heroes Museum displays flight gear, Medals of Honor and military equipment. Bordered by the Cass River, Heritage Park has an event pavilion and a riverside pathway.
                                    Frankenmuth Aerial Park offers ropes courses and zip lines in a wooded area.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card style={{ width: '18rem' }} className="mb=3">
                            {/* <Image src={bayCity}
                                className="card-img-top"
                                alt="Bay City"
                                fluid /> */}
                            <Card.Body>
                                <Card.Title><h3> Bay City </h3></Card.Title>
                                <Card.Text>
                                    <p>
                                    Bay City is famous for its vibrant cultural life. The city is host to several celebrations and festivals which are mainly organized in the summer months.
                                    Some of these festivals are St. Stan's Polish Festival, River Roar, the Pig Gig Rib Roast, the Independence Day Fireworks Festival and the River of Time.       
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card style={{ width: '18rem' }} className="mb=3">
                            {/* <Image src={detroit}
                                className="card-img-top"
                                alt="Detroit"
                                fluid /> */}
                            <Card.Body>
                                <Card.Title><h3>Detroit</h3></Card.Title>
                                <Card.Text>
                                    <p>
                                    Detroit is the largest city in the midwestern state of Michigan. Near Downtown, the neoclassical Detroit Institute of Arts is famed for the Detroit Industry Murals painted by Diego Rivera, and inspired by the city’s ties to the auto industry, giving it the nickname "Motor City."
                                    Detroit is also the birthplace of Motown Records, whose chart-topping history is on display at their original headquarters, Hitsville U.S.A. 
                                    Detroit is an awesome place to visit during the summer for music festivals, sporting events, theatres, bars, and etc. Detroit never stops growing! There are always new bars and restaurants opening their doors in the Detroit area.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card style={{ width: '18rem' }} className="mb=3">
                            {/* <Image src={annArbor}
                                className="card-img-top"
                                alt="Ann Arbor"
                                fluid /> */}
                            <Card.Body>
                                <Card.Title><h3> Ann Arbor </h3></Card.Title>
                                <Card.Text>
                                    <p>
                                    Ann Arbor is a city west of Detroit, in the Midwestern state of Michigan. It’s home to the sprawling University of Michigan, known for its research programs. The University of Michigan Museum of Art displays works from around the globe and spanning centuries.
                                    Science-focused attractions in the city include the Museum of Natural History and the Ann Arbor Hands-On Museum, with kid-friendly interactive exhibits.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                            <Col md={6}>
                            <Card style={{ width: '18rem' }} className="mb=3">
                            {/* <Image src={troy}
                                className="card-img-top"
                                alt="Troy"
                                fluid /> */}
                            <Card.Body>
                                <Card.Title><h3> Troy </h3></Card.Title>
                                <Card.Text>
                                    <p>
                                    Troy is a city located among Metropolitan Detroit's northern suburbs in Oakland County in the state of Michigan. The population was 80,980 at the 2010 census, making it the 11th-largest city in Michigan by population, and the largest city in Oakland County.
                                    Troy has become a business and shopping destination in the Metro Detroit area, with numerous office centers and the upscale Somerset Collection mall.  
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                      </Row>  
                      </Container>
            )
}

export default SouthReg;