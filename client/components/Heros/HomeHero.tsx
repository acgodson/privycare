import React from "react";
import Link from "next/link";
import { useCreator } from "../session";

export default function HomeHero(props: { callBack: Function }): JSX.Element {
  const [creator, setCreator] = useCreator();

  return (
    <>
      <section
        className="header relative pt-16 items-center"
        style={{
          marginTop: "-62px",
        }}
      >
        {/* <div className="bg-image"></div> */}

        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="privy-logo">
              <Link href="/" passHref>
                {/* <h2>privyCare</h2> */}

                <img className="h-9  mt-3" src="/img/text-logo.svg" alt="..." />
              </Link>
            </div>
            <div className="pt-32 sm:pt-0">
              <h2 className="font-bold text-5xl text-blueGray-600">
                Don&apos;t wait till you fall sick.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-teal-500">
              
                Get unlimited access to the doctor using your ethereum wallet.
                <br />
                <strong>
                  We&apos;ll keep your records safe and encrypted with
                </strong>
                <a
                  href="https://privy.io"
                  className="ml-1 text-red-500 font-semibold text-decoration-line: underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 
                  <strong>Privy</strong>
                </a>
              </p>
              <div className="mt-12">
                <a
                  onClick={(e) => {
                    e.preventDefault();

                    setCreator(false);

                    props.callBack();
                  }}
                  href="#"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-teal-500 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  get started
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    if (creator === false) {
                      setCreator(true);
                    }
                    props.callBack();
                  }}
                  href="#"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-200 uppercase text-sm shadow hover:shadow-lg"
                >
                  Offer a Service
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto left-0"
          src="/img/circle.svg"
          alt="..."
        />

        <img
          className="absolute top-0  right-0 mt-5"
          style={{
            height: "21rem",
            zIndex: "-2",
          }}
          src="/img/doc-hero.svg"
          alt="..."
        />
      </section>
    </>
  );
}
