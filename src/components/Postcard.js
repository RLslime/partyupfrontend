import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input,  } from 'reactstrap';

const styles = {
    postStyle: {
      height: "150px",
      width: "400px",
      border: "5px solid black",
      borderRadius: "10px",
      padding: "50px",
      margin: "5px",
      marginLeft: "0px",
      backgroundColor: "darkgrey"
    }
  };
export default class PostForm extends React.Component {

  state = {
    gameTitle: "",
    platform: "",
    gamertag: "",
    help: ""
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   alert(`Game Title: ${this.state.gameTitle}\nPlatform: ${this.state.platform}\n Handle: ${this.state.gamertag}\nDescritption: ${this.state.help}`);
  //   this.setState({})
  // }


  render() {
    return (
      <Form style={styles.postStyle}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleGameTitle">Game Title</Label>
              <Input type="gameTitle" name="gameTitle" id="exampleGameTitle" placeholder="Game you need help with"/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePlatform">Platform</Label>
              <Input type="platform" name="platform" id="examplePlatform" placeholder="PS4, Switch, Xbox One, PC" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleGamertag">Gamertag</Label>
          <Input type="gamertag" name="gamertag" id="exampleGamertag" placeholder="Your Platform Handle"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleHelp">What do you need help with?</Label>
              <Input type="text" name="help" id="examplehelp" placeholder="Achievement name, multiplayer deathmatch, etc..." maxLength="100"/>
            </FormGroup>
          </Col>
          <Col md={4}>
          </Col>
          <Col md={2}>
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label for="exampleCheck" check>PLACEHOLDER</Label>
        </FormGroup>
        <Button>Post</Button>
      </Form>
    );
  }
}