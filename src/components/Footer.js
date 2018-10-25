import React from "react";
import "../styles/Footer.css";

const styles = {
    footerStyle: {
        position: "absolute",
        left: "0",
        bottom: "-110",
        width: "100%",
        backgroundColor: "darkorange",
        color: "black",
        textAlign: "center"
    },
    rowStyle: {
        display: "inline-flex"
    }
};
const Footer = () => (
    <footer style={styles.footerStyle} classname="footer">
        <row style={styles.rowStyle}> 
            <a href="/"> Party Up  </a>
            <p> Created by Shane and Brandon </p>
            <a href="https://github.com/RLslime/partyupfrontend">Github Repo</a>
        </row>
    </footer>
);

export default Footer;