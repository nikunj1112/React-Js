import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Nikunj Rana | All Rights Reserved</p>
      <div className="social-links">
        <a href="https://github.com/nikunj1112" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:example@gmail.com">Email</a>
      </div>
    </footer>
  );
}
