import "../styles/Cards.css";
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


const styles = {
  cardStyle: {
    height: "370px",
    width: "200px",
    border: "5px solid black",
    justifyContent: "inline-grid",
    marginLeft: "2.5px",
    marginRight: "2.5px",
    marginBottom: "5px",
    marginTop: "5px"
  }
};

const Cards = props => {
  return (
    <div>
      <Card style={styles.cardStyle} className="card">
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.platform}</CardSubtitle>
          <CardSubtitle>{props.tag}</CardSubtitle>
          <CardText>{props.text}</CardText>
          <Button float="left">Help Me!</Button>
        </CardBody>
      </Card>
    </div>

    
    
  );
};

export default Cards;