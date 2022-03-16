import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
     (
        <div classname="flex justify-center text-center">
            <h1>Welcome to Michigan Wanders!</h1>
            <p className="text-center">
                If you're looking to explore all that the great State of Michigan
                has to offer, then look no further!
            </p>
            <div class = "regions">
        </div>
    </div>
    );
}

return (

<Card style={{ width: '18rem' }}>
  <Card.Img position="top" src="" />
  <Card.Body>
    <Card.Title>Upper Pennisula</Card.Title>
    <Card.Text>
     Click below to checkout the wonders that the Upper Pennisula has to offer!
    </Card.Text>
    <Button variant="primary">Let's Explore</Button>
    <Link to="/north" className="">
    Let's Explore
    </Link>
  </Card.Body>
</Card>

)

return (
<Card style={{ width: '18rem' }}>
  <Card.Img postion="top" src="" />
  <Card.Body>
    <Card.Title>West Michigan</Card.Title>
    <Card.Text>
    Click below to check out the wonders that the West side of Michigan has to offer!
    </Card.Text>
    <Button variant="primary">Let's Explore</Button>
  </Card.Body>
  <Link to="/south">
  Let's Explore!
  </Link>
</Card>
)

return (
    <Card style={{ width: '18rem' }}>
      <Card.Img postion="top" src="" />
      <Card.Body>
        <Card.Title>East Michigan</Card.Title>
        <Card.Text>
        Click below to check out the wonders that the East side of Michigan has to offer!
        </Card.Text>
        <Button variant="primary">Let's Explore</Button>
      </Card.Body>
      <Link to="/east">
      Let's Explore!
      </Link>
    </Card>
    )

    
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img postion="top" src="" />
          <Card.Body>
            <Card.Title>South Michigan</Card.Title>
            <Card.Text>
            Click below to check out the wonders that the South side of Michigan has to offer!
            </Card.Text>
            <Button variant="primary">Let's Explore</Button>
          </Card.Body>
          <Link to="/south">
          Let's Explore!
          </Link>
        </Card>
        )
        

export default HomePage;