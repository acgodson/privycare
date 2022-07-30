import React from "react";
import { useState, useEffect } from "react";
import SplashScreen2 from "../components/WelcomePage/splash2";
import SplashScreen1 from "../components/WelcomePage/splash_screen1";

function WelcomePage() {
  const [splashScreen1Showing, setSplashScreen1Showinng] = useState(true);

  
  useEffect(() => {
    
    function timeOut() {

    const fadeSplash = setTimeout(() => {
      setSplashScreen1Showinng(false);
    }, 5000);

    if (!splashScreen1Showing) {
      clearTimeout(fadeSplash);
    }
  }

    timeOut();
  }, [splashScreen1Showing]);

  return (
    <>  	
  {splashScreen1Showing && <SplashScreen1 />}
  {!splashScreen1Showing && <SplashScreen2 />}     
    </>
  );
};

export default WelcomePage;
