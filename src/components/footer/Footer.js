import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import { siteConfig } from "../../siteDateModifyConfig.js"


export default function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-div">
      <Fade>
        <p
          className="footer-text"
          style={{
            color: props.theme.secondaryText,
            fontSize: "0.9rem",
            textAlign: "center",
          }}
        >
          {currentYear} {greeting.title}. All rights reserved. | Last updated: {siteConfig.lastUpdated}
        </p>
      </Fade>
    </div>
  );
}
