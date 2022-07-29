import { useRouter } from "next/router";
import React, { useState, useContext, useEffect } from "react";
import { InputField } from "../components/Cards/InputField";
import { CreatePlan } from "../components/CreatePlan";
import Features from "../components/Features/Features";
import Footer from "../components/Footers/Footer";
import HomeHero from "../components/Heros/HomeHero";
import Modal from "../components/Modal/modal";
import { isMetaMaskEnabled, useSession } from "../components/session";

export default function SignIn() {
  const router = useRouter();
  const session = useSession();
  const [signInError, setSignInError] = useState<Error | null>(null);
  const [showModal, setshowModal] = useState<boolean>(false);

  function onSubmit() {
    function onSuccess() {
      router.push("/");
    }

    function onFailure(error: Error) {
      setSignInError(error);
    }
    session.authenticate().then(onSuccess, onFailure);
  }

  useEffect(() => {
    if (!isMetaMaskEnabled()) {
      setshowModal(true);
    }
  }, []);

  function handleModal() {
    if (showModal) {
      setshowModal(false);
    } else {
      setshowModal(true);
    }
  }

  return (
    <>
      <HomeHero callBack={() => onSubmit()} />
      <Features />
      <Footer />

      {showModal && (
        <Modal
          style={{
            minHeight: "25vh",
            paddingTop: "12px",
            paddingBottom: "12px",
            top: "20px",
            marginTop: "15px",
            overflow: "hidden",
            background: "white",
          }}
          closeModal={handleModal}
          big={""}
        >
          <div className="px-15 flex justify-center flex-col align-center">
            <i className="fas fa-warn"></i>
            <h2 className=" text-blueGray-700 font-bold px-6">
              {" "}
              Your browser is not MetaMask enabled. To use PrivyCare, you must
              connect with MetaMask using the browser extension available in
              Chrome and Firefox
              <a className="text-teal-500" href="metamask.io" target={"_blank"}>
                {" "}
                Install Here
              </a>
            </h2>
          </div>
        </Modal>
      )}

      {signInError !== null && (
        <Modal
          style={{
            minHeight: "20vh",
            paddingTop: "12px",
            paddingBottom: "12px",
            top: "20px",
            marginTop: "15px",
            overflow: "hidden",
            background: "white",
          }}
          closeModal={handleModal}
          big={""}
        >
          <div className="px-15 flex justify-center flex-col align-center">
            <i className="fas fa-warn"></i>
            <h2 className=" text-blueGray-700 font-bold px-6">
            {String(signInError.message)+ ", refresh your browser and try again later"} 
            </h2>
          </div>
        </Modal>
      )}
    </>
  );
}
