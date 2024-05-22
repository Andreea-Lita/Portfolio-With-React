import React from "react";
import "./footerstyle.css";

function Footer() {
  return (
    <footer className="footer">
      <span id="sub">Portfolio with React 2024</span>
      <div className="contacts-container">
        <a href="https://www.linkedin.com/in/andreea-malaiasi-bb15aa235">Linkedin</a>
        <br />
        <a href="https://github.com/Andreea-Lita">GitHub</a>.
        <br />
        <a href="https://mail.google.com/">myemail</a>
        <br />
      </div>
      <a href="Tel:+1234567890">cALL UK: +1 234 567 890</a>
    </footer>
  );
}

export default Footer;
