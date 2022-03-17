import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';


const HomePage = () => {
    const cardInfo = [
        { image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.takethetruck.com%2Fblog%2Fthings-to-do-in-the-upper-peninsula&psig=AOvVaw1otFbuXhHbmym1EB3m-Aze&ust=1647493746567000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDh9JXwyfYCFQAAAAAdAAAAABAD",

            title: "Upper Peninsula",

            text: "Click below to checkout the wonders that the Upper Peninsula has to offer!"},

        { image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog-www.pods.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fresized_FI_Getty_Detroit-MI.jpg&imgrefurl=https%3A%2F%2Fwww.pods.com%2Fblog%2F2021%2F04%2Fliving-in-detroit%2F&tbnid=cpkWr1QFAPsxyM&vet=12ahUKEwji0oSx8Mn2AhURFc0KHR1HA-cQMygBegUIARDbAQ..i&docid=dLhrCZ2KhPoHwM&w=1500&h=1000&q=detroit%20michigan&client=safari&ved=2ahUKEwji0oSx8Mn2AhURFc0KHR1HA-cQMygBegUIARDbAQ",
        
            title: "South Region",
        
            text: "Click below to checkout the wonders that the South Side of Michigan has to offer!"},

        { image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.contentstack.io%2Fv3%2Fassets%2Fblt00454ccee8f8fe6b%2Fblt307583d523e4c3d0%2F605c0c2d96151d0ef942bf9c%2FUS_GrandHaven_US_Header.jpg&imgrefurl=https%3A%2F%2Fwww.airbnb.com%2Fgrand-haven-mi%2Fstays&tbnid=7fOJjUKUkO-3BM&vet=12ahUKEwidt8iD8sn2AhWCcs0KHR0BA-IQMygJegUIARDsAQ..i&docid=HmOHckYHcrCspM&w=3150&h=1890&q=grand%20haven%20beach&hl=en&client=safari&ved=2ahUKEwidt8iD8sn2AhWCcs0KHR0BA-IQMygJegUIARDsAQ",
        
            title: "West Region",

            text: "Click below to checkout the wonders that the West Side of Michigan has to offer!"},

        { image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.contentstack.io%2Fv3%2Fassets%2Fblt00454ccee8f8fe6b%2Fbltb1b946fa842891e4%2F5fb782ff3cdbef7187ce8d59%2FUS_TraverseCity_US_Header.jpg%3Fwidth%3D1680%26auto%3Dwebp&imgrefurl=https%3A%2F%2Fwww.airbnb.com%2Ftraverse-city-mi%2Fstays&tbnid=Ko3JxkV9bLvLjM&vet=12ahUKEwisv7jL9Mn2AhWMY80KHfIdBtcQMygSegUIARD6AQ..i&docid=xHyuSCvJsWLxnM&w=1680&h=1008&q=traverse%20city%20michigan&hl=en&client=safari&ved=2ahUKEwisv7jL9Mn2AhWMY80KHfIdBtcQMygSegUIARD6AQ", 
        
            title: "North Region",

            text: "Click below to checkout the wonders that the East Side of Michigan has to offer!"}

    ];

    const renderCard = (card, index) => {
        return(
            <Card style={{ width: '18rem' }} key={index} className="box">
                    <Card.Img position="top" src={card.image}/>
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>
                            {card.text}
                        </Card.Text>
                        <button variant="primary" className="card-btn">
                        {/* <Link to={}></Link> */}
                        </button>
                    </Card.Body>
                </Card>
        )
    }


    return (
     
        <><div className="flex justify-center text-center">
            <h1>Welcome to Michigan Wanders!</h1>
            <p className="text-center text-bold">
                If you're looking to explore all that the great State of Michigan
                has to offer, then look no further!
            </p>
        </div><div className="grid">
            {cardInfo.map(renderCard)}
            </div></>
        
    )
};

        

export default HomePage;

