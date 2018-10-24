import React from "react";
import Reactstrap from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import PostForm from "./components/Postcard";
import SignIn from "./components/Signin";
import CreateForm from "./components/Createlogin";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json"

const styles = {
  appStyle: {
    display: "inline-flex",
    justifyContent: "center"
  }
};
const App = () => (
  <Router>
  <div>
    <Navbar />
    <Wrapper>
      <Route exact path="/Signin" component={SignIn} />
      <Route exact path="/Post" component={PostForm} />
      <Route exact path="/Createlogin" component={CreateForm} />
    </Wrapper>
    <div style={styles.appStyle}>
    <Cards 
    title ={cards[0].title}
    platform ={cards[0].platform}
    tag ={cards[0].tag}
    text ={cards[0].text}
    image ={cards[0].image}/>
    
    <Cards     
    title ={cards[1].title}
    platform ={cards[1].platform}
    tag ={cards[1].tag}
    text ={cards[1].text}
    image ={cards[1].image} />
    <Cards     
    title ={cards[2].title}
    platform ={cards[2].platform}
    tag ={cards[2].tag}
    text ={cards[2].text}
    image ={cards[2].image}/>
    <Cards     
    title ={cards[3].title}
    platform ={cards[3].platform}
    tag ={cards[3].tag}
    text ={cards[3].text}
    image ={cards[3].image}/>
    <Cards     
    title ={cards[4].title}
    platform ={cards[4].platform}
    tag ={cards[4].tag}
    text ={cards[4].text}
    image ={cards[4].image}/>
    <Cards     
    title ={cards[5].title}
    platform ={cards[5].platform}
    tag ={cards[5].tag}
    text ={cards[5].text}
    image ={cards[5].image}/>
    <Cards     
    title ={cards[6].title}
    platform ={cards[6].platform}
    tag ={cards[6].tag}
    text ={cards[6].text}
    image ={cards[6].image}/>
    </div>
    <div style={styles.appStyle}><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /></div>
    {/* <PostForm /> */}
    {/* <SignIn /> */}
    {/* <CreateForm /> */}
  </div>
  </Router>
);

export default App;
