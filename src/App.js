import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostForm from "./components/Postcard";
import SignIn from "./components/Signin";
import CreateForm from "./components/Createlogin";
import Wrapper from "./components/Wrapper";
import Firstcards from "./components/Firstcards";
import Nextcards from "./components/Nextcards";
import Footer from "./components/Footer"

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
  },
  linkStyle: {
    textAlign: "center",
    margin:"5px"
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
    <div style={styles.linkStyle}>
    <a href="/">prev</a> <a href="/Next" float="right">next</a>
    </div>
    <div>
    <Footer />
    </div>
  </div>
  </Router>
);

export default App ;

