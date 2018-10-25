import React from "react";
import Reactstrap from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import PostForm from "./components/Postcard";
import SignIn from "./components/Signin";
import CreateForm from "./components/Createlogin";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import Firstcards from "./components/Firstcards";
import Nextcards from "./components/Nextcards";


const styles = {
  appStyle: {
    display: "inline-flex",
    justifyContent: "center"
  },
  divStyle: {
    backgroundColor: "white"
  },
  wrapperStyle: {
    justifyContent: "center",
    display: "inline flex",
    position: "fixed",
    zIndex: "2"
  }
};

const App = () => (
  <Router>
  <div style={styles.divStyle}>
    <Navbar />
    <div style={styles.wrapperStyle}>
    <Wrapper >
      <Route exact path="/Signin" component={SignIn} />
      <Route exact path="/Post" component={PostForm}/>

      <Route exact path="/Createlogin" component={CreateForm} />


    </Wrapper>
          
    </div>
    <Route exact path="/Next" component={Nextcards} />
    <Route exact path="/" component={Firstcards} />
    {/* <PostForm /> */}
    {/* <SignIn /> */}
    {/* <CreateForm /> */}
    <a href="/">prev</a> <a href="/Next" float="right">next</a>
  </div>
  </Router>
);

export default App ;

