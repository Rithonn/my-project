import Container from "react-bootstrap/esm/Container";
import { NavBarComponent } from "../navbar/Navbar";
import {Button, Card, CardGroup} from "react-bootstrap";
import {useState} from "react";

function VideoGameCard(props) {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    {props.theNumber}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export function HomeComponent(){
    const arrayCount = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
    const arrayCountList = arrayCount.map((theNumber) => <VideoGameCard theNumber={theNumber}/>);

    return(
        <>
            <NavBarComponent/>
            <Container>
                <CardGroup>
                    {arrayCountList}
                </CardGroup>
            </Container>
        </>
        
    )
}