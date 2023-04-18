import React from "react";
import {Link} from "react-router-dom" 
import styles from "./Navigation.module.css"

const Navigation = () => {
  const brandStyle = {
    color: "#FF9B05",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };


  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to="/">
        <span>VoiceWings</span>
      </Link>
    </nav>
  );
};

export default Navigation;
