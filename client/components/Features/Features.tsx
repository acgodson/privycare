import React from "react";

export default function Features() {
  return (
    <>
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-600 text-white">

      <div
          className="px-0 mx-auto"
          style={{
            background: 'url("../../img/br.png")',
            opacity: "0.1",
            position: "absolute",
            top: "0",
            height: "100%",
            width: "100%",
           
          }}
        ></div>   


        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden "
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-600 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className=" w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-teal-500">
                <img
                  alt="..."
                  src="img/insurance.jpg"
                  className="w-full h-0.5 align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-teal-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white text-center text-white ">
                    PRIVYCARE PLANS
                  </h4>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">


              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-orange-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-200 ">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-3xl   mb-1 font-bold uppercase text-orange-500">
                       Discounted Plans
                      </h6>
                      <p className="mb-4 text-blueGray-200">
                      Healthcare is provided by a network of providers who are partnered with privycare plan and
                       offer a substantial discount to
                       their normal rates. 
                                          </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blueGray-200">
                        <i className="fas fa-wallet"></i>
                      </div>
                      <h6 className="text-xl text-teal-200  mb-1 font-bold">
                        Tax Free Insurance
                      </h6>
                      <p className="mb-4 text-blueGray-200">
                  Privycare Plans allow you to put tax-free money 
                  away to cover healthcare costs anytime within the month in view
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-lightBlue-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-200">
                        <i className="fas fa-signature"></i>
                      </div>
                      <h6 className="text-xl lg:text-2xl mb-1 text-lightBlue-500 font-semibold">Flexible Contract</h6>
                      <p className="mb-4 text-blueGray-200">
                        Enrollment with any don depends on contract renewal. You can opt out anytime, 
                      or pay for next month to maintain coverage.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-teal-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-teal-200">
                        <i className="fas fa-key"></i>
                      </div>
                      <h6 className="text-3xl text-teal-500  mb-1 font-bold">
                        Privy Security
                      </h6>
                      <p className="mb-4 text-blueGray-200">
                        Your data is secured off chain. Snsitive personal data like email, zipcode, identification numbers 
                        or medical records are encrypted using privy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



// We know that health insurance can be confusing, and you probably have a lot of questions. 
//That’s why we recommend speaking to a licensed health insurance agent before enrolling in a plan.
// Health insurance agents are licensed in their local state to provide advice and help people select 
//the best plan for their unique needs. There is no obligation to get a free health insurance quote, and no cost at any time to use this service.