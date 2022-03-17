import React from "react";
import { Container, Card, Row, Col, Image } from 'react-bootstrap';

import beaverIsland from "../assets/images/BeaverIsland.jpg";
import petosky from "../assets/images/Petosky.jpg";
import traverseCity from "../assets/images/TraverseCity.jpg";
import manistee from "../assets/images/Manistee.jpg";

const NorthReg = () => {
    return(
<Container>
            <Row>
                <Col md={6}>
                    <Card style={{ width: '18rem' }} className="mb=3">
                    <Image src={beaverIsland}
                        className="card-img-top"
                        alt="Beaver Island"
                        fluid />
                    <Card.Body>
                        <Card.Title><h3>Beaver Island</h3></Card.Title>
                        <Card.Text>
                            <p>
                                Beaver Island is the largest island found in Lake Michigan measuring 13 miles long and 6 miles wide.
                                Although Beaver Island is known today mostly for its beaches, forests, recreational harbor and seclusion, previously it was the site of a unique Latter Day Saint kingdom.
                                Beaver Island is mostly populated by Irish Immigrants. Their descendants still make up the majority of the island population.
                            </p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card style={{ width: '18rem' }} className="mb=3">
                    <Image src={petosky}
                        className="card-img-top"
                        alt="Petoksy"
                        fluid />
                    <Card.Body>
                        <Card.Title><h3> Petosky </h3></Card.Title>
                        <Card.Text>
                            <p> 
                            Petoskey and Harbor Springs are on the shore of Lake Michigan’s Little Traverse Bay.
                            Boyne Falls is located south of Petoskey, and Boyne City is on the southern tip of Lake Charlevoix. The area is characterized by rolling hills, wooded terrain and inland lakes, including a 38-mile inland waterway.
                            Warm weather recreation in Boyne Country includes fishing, canoeing, boating, sailing, beachcombing, golfing, hiking, cycling, in-line skating, camping, picnicking, and mushroom hunting.
                            Winter activities include Alpine and Nordic skiing, snowmobiling, ice skating, snowshoeing and ice fishing. The area also features exclusive shops and boutiques, dining and entertainment facilities.  
                            </p>
                        </Card.Text>
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
                        <Card.Title><h3>Traverse City</h3></Card.Title>
                        <Card.Text>
                            <p>
                            The Traverse City area is the largest producer of tart cherries in the United States. Near the time of cherry harvest, the city hosts the annual week-long National Cherry Festival in the first full week of July, attracting approximately 500,000 visitors annually.
                            The surrounding countryside also produces grapes, and is one of the centers of wine production in the Midwest. Tourism, both summer and winter, is another key industry.
                            The Traverse City area features varied natural attractions, including freshwater beaches, vineyards, a National Lakeshore, downhill skiing areas, and numerous forests. 
                            </p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card style={{ width: '18rem' }} className="mb=3">
                    <Image src={manistee}
                        className="card-img-top"
                        alt="Manistee"
                        fluid />
                    <Card.Body>
                        <Card.Title><h3> Manistee </h3></Card.Title>
                        <Card.Text>
                            <p>
                            After 150 years Manistee County has both changed and remained the same. The early boom years of lumbering and exhaustive agriculture have evolved into a stable, diversified industrial base and a top fruit-producing agricultural center.
                            It is the beauty and natural wonder that abounds in the region’s forests, lakes and rivers that remain a constant factor and will always make Manistee County a special place to live and visit. 
                             </p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
              </Row>  
              </Container>
    )
}

export default NorthReg;