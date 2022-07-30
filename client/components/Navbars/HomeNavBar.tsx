import React from "react";
import UserDropdown from "../Dropdowns/UserDropdown";
import { SignOutLink } from "../session";

export default function Navbar(props: { user: string}) {
  return (
    <>
      <nav className="absolute top-0 right-0 z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 ml-8 bg-transparent">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="  relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                {/* <i className="fas fa-user"></i> */}
              </span>
              <input
                type="text"
                readOnly= {true}
                value= {props.user}
                placeholder="User"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </div>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown

              openMeta = {null}   />
          </ul>
        </div>
      </nav>
    </>
  );
}
