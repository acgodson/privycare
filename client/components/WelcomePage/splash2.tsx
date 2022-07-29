import SignIn from "../../pages/sign-in";
import React from "react";
import { useEffect, useState } from "react";
import styles from "../WelcomePage/splash2.module.css";
import { useSession } from "../session";
import Dashboard, {  } from "../../pages/dashboard";




const SplashScreen2 = () => {
  const [stylesArray, setStylesArray] = useState([styles.splash__screen2]);
  const session = useSession();

  
  useEffect(() => {
    setStylesArray((stylesArray) => [
      ...stylesArray,
      styles.splash__screen2__fadingIn,
    ]);
  }, []);

  return (
    <div className={stylesArray.join(" ")}>
      {!session.authenticated ? <SignIn /> : <Dashboard/>}
    </div>
  );
};

export default SplashScreen2;
