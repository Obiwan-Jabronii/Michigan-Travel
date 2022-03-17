import React from "react";

import { Container, Card, Row, Col, Image } from 'react-bootstrap';

import ludington from "../assets/images/Ludington.jpg";
import grandHaven from "../assets/images/Grand Haven.jpg";
import grandRapids from "../assets/images/grand-rapids-hero (1).jpg";
import holland from "../assets/images/Holland.jpg";
import saugatuck from "../assets/images/Saugatuck.jpg";


const WestReg = () => {
    return(
        <Container>
                    <Row>
                        <Col md={6}>
                            <Card style={{ width: '18rem' }} className="mb=3">
                            <Image src={ludington}
                                className="card-img-top"
                                alt="Ludington"
                                fluid />
                            <Card.Body>
                                <Card.Title><h3> Ludington </h3></Card.Title>
                                <Card.Text>
                                    <p>
                                    Ludington is a harbor town located on Lake Michigan at the mouth of the Pere Marquette River. Many people come to Ludington year round for recreation, including boating and swimming on Lake Michigan, Hamlin Lake, and other smaller inland lakes, as well as hunting, fishing, and camping.
                                    Ludington has multiple golf and disc golf courses, attracting numerous players. In summer, the city hosts quite a few large events
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card style={{ width: '18rem' }} className="mb=3">
                            <Image src={grandHaven}
                                className="card-img-top"
                                alt="Grand Haven"
                                fluid />
                            <Card.Body>
                                <Card.Title><h3> Grand Haven </h3></Card.Title>
                                <Card.Text>
                                    <p>
                                    Grand Haven is a Michigan city on the eastern shore of Lake Michigan, known for its sandy beaches. A shop- and restaurant-lined boardwalk runs along the harbor to Grand Haven State Park beach and the south pier, home to the 1839 Grand Haven Lighthouse.
                                    The seasonal Grand Haven Musical Fountain features synchronized light and water shows. A trail with lake views winds through wooded dunes at Rosy Mound Natural Area.  
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card style={{ width: '18rem' }} className="mb=3">
                            <Image src={grandRapids}
                                className="card-img-top"
                                alt="Grand Rapids"
                                fluid />
                            <Card.Body>
                                <Card.Title><h3> Grand Rapids </h3></Card.Title>
                                <Card.Text>
                                    <p>
                                    Grand Rapids is a Michigan city on the Grand River, east of Lake Michigan. On the outskirts, the Frederik Meijer Gardens & Sculpture Park has a tropical conservatory and multiple gardens.
                                    Its art collection includes works by Auguste Rodin, Henry Moore and Ai Weiwei. Downtown, the Grand Rapids Art Museum spotlights Michigan artists in its rotating shows. Grand Rapids is known for many breweries dotted around town.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card style={{ width: '18rem' }} className="mb=3">
                            <Image src={holland}
                                className="card-img-top"
                                alt="Holland"
                                fluid />
                            <Card.Body>
                                <Card.Title><h3> Holland </h3></Card.Title>
                                <Card.Text>
                                    <p>
                                    Holland is a city on the shore of Lake Macatawa, in Michigan. The much-photographed Big Red Lighthouse stands by the channel that connects this lake to Lake Michigan. Nearby, the beachfront Holland State Park shelters deer and migratory birds.
                                    Windmill Island Gardens is home to De Zwaan, a centuries-old windmill. May’s Tulip Time Festival, recalling Holland’s Dutch roots, sees tulips blooming all over the city.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                            <Col md={6}>
                            <Card style={{ width: '18rem' }} className="mb=3">
                            <Image src={saugatuck}
                                className="card-img-top"
                                alt="Saugatuck"
                                fluid />
                            <Card.Body>
                                <Card.Title><h3> Saugatuck </h3></Card.Title>
                                <Card.Text>
                                    <p>
                                    From award-winning beaches to scenic waterways and grassy dunes, from a thriving art scene born from a creative, open-minded culture to a culinary landscape that’s become world-renowned—this is a one-of-a-kind place where people long to stay.
                                    Sauagtuck is both rich in recreation and relaxation. Many people visit for a ultimate escape.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                      </Row>  
                      </Container>
            )

}

export default WestReg;