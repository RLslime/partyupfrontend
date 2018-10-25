import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input,  } from 'reactstrap';

const styles = {
    createStyle: {
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


export default class CreateForm extends React.Component {
  render() {
    return (
      <Form style={styles.createStyle}>
        <Row form>
          <Col>
            <FormGroup>
              <Label for="exampleUserName">User Name</Label>
              <Input type="userName" name="userName" id="exampleUserName" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" />
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label for="exampleCheck" check>PLACEHOLDER</Label>
        </FormGroup>
        <Button>Create Log In</Button>
      </Form>
    );
  }
}