
import React from 'react';
import "../styles/Signin.css";
import { Button, Form, FormGroup, Label, Input, Breadcrumb, } from 'reactstrap';

const styles = {
    signInStyle: {
      height: "150px",
      width: "400px",
      border: "5px solid black",
      padding: "50px",
      margin: "5px",
      marginLeft: "0px"
    }
  };


export default class SignIn extends React.Component {
  render() {
    return (
      <Form style={styles.signInStyle}>
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        {' '}
    <Breadcrumb>
<a href="/Createlogin">Create Log In</a>
    </Breadcrumb>
        <Button>Submit</Button>
      </Form>
    );
  }
}