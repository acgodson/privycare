import React from "react";
import { useState, useEffect } from "react";
import SplashScreen2 from "../components/WelcomePage/splash2";
import SplashScreen1 from "../components/WelcomePage/splash_screen1";

function WelcomePage() {
  const [splashScreen1Showing, setSplashScreen1Showinng] = useState(true);

  function timeOut() {

    const fadeSplash = setTimeout(() => {
      setSplashScreen1Showinng(false);
    }, 5000);

    if (!splashScreen1Showing) {
      clearTimeout(fadeSplash);
    }
  }

  useEffect(() => {
    timeOut();
  },[]);

  return (
    <>  	
  {splashScreen1Showing && <SplashScreen1 />}
  {!splashScreen1Showing && <SplashScreen2 />}     
    </>
  );
};

export default WelcomePage;
