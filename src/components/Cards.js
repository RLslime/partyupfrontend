import "../styles/Cards.css";
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


const styles = {
  cardStyle: {
    dsplay: "flex",
    flexDirection: "column",
    height: "370px",
    width: "200px",
    border: "5px solid black",
    borderRadius: "10px",
    justifyContent: "inline-grid",
    marginLeft: "2.5px",
    marginRight: "2.5px",
    marginBottom: "5px",
    marginTop: "5px",
    backgroundColor: "lightgrey"
  },
  buttonStyle: {
    position: "flex-column",
    float: "right",
    marginTop: "auto",
    hieght: "25px"
  },
  divStyle: {
    position: "fixed"
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
          {/* <div style={styles.divStyle}> */}
          <Button style={styles.buttonStyle}>Help Me!</Button>
          {/* </div> */}
        </CardBody>
      </Card>
    </div>

    
    
  );
};

export default Cards;