import React from 'react'
import { Link } from 'react-router-dom';

import mackinawCity from "../assets/images/MackinawCity.jpg";
import grandHaven from "../assets/images/Grand Haven.jpg";
import detroit from "../assets/images/Detroit.jpg";
import traverseCity from "../assets/images/TraverseCity.jpg";

import { Container, Card, Row, Col, Image } from 'react-bootstrap';


function HomePage() {
    return (

        <Container fluid>
            <div className="flex justify-center text-center text-bold text-3xl">
            <h1>Welcome to Michigan Wanders!</h1>
            <p className="text-center text-3xl">
                If you're looking to explore all that the great State of Michigan
                has to offer, then look no further!
            </p>
            <div className='mt-6 text-3xl'>
                To begin, click on the cards below to explore!
            </div>
        </div>
        <Container>
                <Row>
                    <Col md={6}>
                        <Card style={{ width: '18rem' }} className="mb=3">
                            <Image src={mackinawCity}
                                className="card-img-top"
                                alt="Mackinaw City"
                                fluid />
                            <Card.Body>
                                <Card.Title><h3>Upper Peninsula</h3></Card.Title>
                                <Card.Text>
                                    <p> Click below to checkout the wonders that the Upper Peninsula has to offer!</p>
                                </Card.Text>
                                <Link to={"/UpperReg"}></Link>
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
                                <Card.Title>West Michigan</Card.Title>
                                <Card.Text>
                                    <p> Click below to checkout the wonders that the Westside of Michigan has to offer!</p>
                                </Card.Text>
                                <Link to={"/WestReg"}></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card style={{ width: '18rem' }} className="mb=3">
                            <Image src={detroit}
                                className="card-img-top"
                                alt="Detroit"
                                fluid />
                            <Card.Body>
                                <Card.Title> South Michigan</Card.Title>
                                <Card.Text>
                                    <p> Click below to checkout the wonders that the Southside of Michigan has to offer!</p>
                                </Card.Text>
                                <Link to={"/SouthReg"}></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card style={{ width: '18rem' }} className="mb=3">
                            <Image src={traverseCity}
                                className="card-img-top"
                                alt="Traverse City"
                                fluid />
                            <Card.Body>
                                <Card.Title>North Michigan</Card.Title>
                                <Card.Text>
                                    <p> Click below to checkout the wonders that the Northside of Michigan has to offer!</p>
                                </Card.Text>
                                <Link to={"/NorthReg"}></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
        );
}

    export default HomePage;
