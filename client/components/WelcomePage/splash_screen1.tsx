import React from "react";
import { useEffect, useState } from "react";
import styles from "../WelcomePage/splash1.module.css";

const SplashScreen = () => {
  const [stylesArray, setStylesArray] = useState([styles.splash__screen]);

  useEffect(() => {
    setStylesArray((stylesArray) => [
      ...stylesArray,
      styles.splash__screen__faded,
    ]);
  }, []);

  return (
   <>
    <div className={stylesArray.join(" ")}>
      <div className={styles.top}>
        <img src="img/Splash1/splash_screen_circle_1.svg" alt="ellipse" />
        <img src="img/Splash1/splash_screen_circle_2.svg" alt="ellipse" />
      </div>
      <div className={styles.logo + "bg-red-500"}>
        <img  src="img/banner.svg" alt="logo" />
		{/* <h2>privyCare</h2> */}
      </div>
      <img
        className={styles.doctors__illustration}
        src="img/Splash1/splash_screen_scientists.svg"
        alt="illustration of doctors"
      />
      <img
        className={styles.bottom__ellipse}
        src="img/Splash1/splash_screen_bottom_ellipse.svg"
        alt="ornamental ellipse"
      />
    </div>
   </>
  );
};

export default SplashScreen;
