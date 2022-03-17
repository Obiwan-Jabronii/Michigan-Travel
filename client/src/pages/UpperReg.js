import React from "react";
import { Container, Card, Row, Col, Image } from 'react-bootstrap';

import tahquamenon from "../assets/images/tahquamenonFalls.jpg";
import isleRoyale from "../assets/images/IsleRoyale.jpg";
import mackinawCity from "../assets/images/MackinawCity.jpg";
import mackinacIsland from "../assets/images/MackinacIsland.jpg";
import saultSteMarie from "../assets/images/SaultSteMarie.jpg";

const UpperReg = () => {
    return(
        <Container>
                    <Row>
                        <Col md={6}>
                            <Card style={{ width: '18rem' }} className="mb=3">
                            <Image src={tahquamenon}
                                className="card-img-top"
                                alt="Tahquamenon Falls"
                                fluid />
                            <Card.Body>
                                <Card.Title><h3> Tahquamenon Falls </h3></Card.Title>
                                <Card.Text>
                                    <p>
                                    The Tahquamenon Falls are two different waterfalls on the Tahquamenon River. Both are located near Lake Superior in the eastern Upper Peninsula of Michigan.
                                    The water is notably brown in color from the tannins leached from the cedar swamps which the river drains.
                                    The falls are within Tahquamenon Falls State Park, between Newberry, Michigan, and Paradise, Michigan.
                                    They are a popular tourist destination in the Upper Peninsula during all seasons. Snowmobile trails lead almost to the falls, and walkways are kept clear for most of the winter.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card style={{ width: '18rem' }} className="mb=3">
                            <Image src={isleRoyale}
                                className="card-img-top"
                                alt="Isle Royale"
                                fluid />
                            <Card.Body>
                                <Card.Title><h3> Isle Royale </h3></Card.Title>
                                <Card.Text>
                                    <p>
                                    Surrounded by Lake Superior in the state of Michigan, Isle Royale National Park is a rugged, remote site that consists of Isle Royale and hundreds of smaller islands adjacent to it. It covers 894 square miles, with 209 square miles of land and 658 square miles of water.   
                                    Isle Royale offers adventures for backpackers, hikers, boaters, kayakers, canoeists and scuba divers. Here, amid stunning scenic beauty, you'll find opportunities for reflection and discovery, and make memories that last a lifetime.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card style={{ width: '18rem' }} className="mb=3">
                            <Image src={mackinawCity}
                                className="card-img-top"
                                alt="Mackinaw City"
                                fluid />
                            <Card.Body>
                                <Card.Title><h3>Mackinaw City</h3></Card.Title>
                                <Card.Text>
                                    <p> </p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card style={{ width: '18rem' }} className="mb=3">
                            <Image src={mackinacIsland}
                                className="card-img-top"
                                alt="Mackinac Island"
                                fluid />
                            <Card.Body>
                                <Card.Title><h3> Mackinac Island </h3></Card.Title>
                                <Card.Text>
                                    <p>
                                    Mackinac Island is an island in Lake Huron. It is part of the U.S. state of Michigan and is 8 miles (13 kilometers) around.
                                    Many people go to see Mackinac Island in the summer because the island passed a local law that says that no one can use a car on the island. Everybody has to ride a horse or a bicycle. In recent years, young people have been using roller skates or roller blades to get around the island. There is a narrow paved road that follows the 8 miles of shoreline. This road is for horses (and their buggies), bicycles, skaters and joggers or just people taking a long walk.
                                    In order to get to Mackinac Island, visitors have to buy a ticket on a ferry boat. The boat ride has views of Lake Huron and the Mackinac Bridge. After they get to Mackinac Island, many visitors buy locally made fudge.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                            <Col md={6}>
                            <Card style={{ width: '18rem' }} className="mb=3">
                            <Image src={saultSteMarie}
                                className="card-img-top"
                                alt="Sault Ste Marie"
                                fluid />
                            <Card.Body>
                                <Card.Title><h3> Sault Ste Marie </h3></Card.Title>
                                <Card.Text>
                                    <p>
                                    Sault Ste. Marie is the oldest city in Michigan, and among the oldest cities in the United States. Over the course of our history, the flags of several sovereign nations have flown over the Sault.
                                    Sault Ste. Marie was settled as early as 1668, which makes it Michigan's oldest city and among the oldest cities in the United States. Located at the northeastern edge of the Upper Peninsula, it is separated by the St. Marys River from the much-larger city of Sault Ste. Marie, Ontario.
                                    The two are connected by the Sault Ste. Marie International Bridge, which represents the northern terminus of Interstate 75. This portion of the river also contains the Soo Locks, as well as a swinging railroad bridge. The city is also home to Lake Superior State University.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                      </Row>  
                      </Container>
            )
}

export default UpperReg;