import React from 'react'
import styles from "./Home.module.css"
import { Link, useNavigate } from "react-router-dom"
import Card from "../../components/shared/Card/Card"
import Button from "../../components/shared/Button/Button"

const Home = () => {
  const signInLinkStyle = {
    color: "#FF9B05",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  const navigate = useNavigate();
  function startRegister() {
    navigate("/register");
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to VoiceWings!" icon={"Diya"}>
        <p className={styles.text}>
          Live life to the fullest, but never fear the struggles. Do you know
          why a person having exceptional knowledge never cares about the social
          obligations, politics and power. Because he/she can make it to any
          extent he/she wants.
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLinkStyle} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default Home