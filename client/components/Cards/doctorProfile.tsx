import React, { useState } from "react";

export default function DoctorProfile(props: {
  name: string;
  job: string;
  location: string;
  showModal: boolean;
  handleModal: () => void;
  onTap: () => void;
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-full break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6 mt-3">
          <div className="flex flex-wrap justify-center mt-16">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src=""
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px "
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-24">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {props.name}
              <span className="text-xs ml-3">
                <i className="fas fa-briefcase mr-2 text-xs text-blueGray-400"></i>
                {props.job}
              </span>
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              {props.location}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-10/12 px-4 flex flex-col md:flex-col lg:flex-col justify-around">
                <button
                  onClick={() => {
                    props.handleModal();
                    props.onTap();
                  }}
                  className="py-3 mb-2 bg-teal-500 rounded px-2 py-2 font-bold text-blueGray-200 border-none focus-none uppercase"
                >
                  <i className="fas fa-clock text-blueGray-200"></i> Book
                  Appointment
                </button>

                <button 
                // onClick={null}
                
                className=" opacity-0 py-3 bg-blueGray-200 rounded px-2 py-2 font-bold text-blueGray-200 border-none focus-none uppercase">
                  <i className="fas fa-email text-white"></i> Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
