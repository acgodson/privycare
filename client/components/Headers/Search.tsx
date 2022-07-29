import React from "react";
import CardStats from "../Cards/CardStats";

// components


export default function SearchHeader() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 pb-16 pt-32">
        <div className="px-12 md:px-10 mx-auto w-full">

            <input
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          
            placeholder="Search for a Provider"
            onChange={() => {}}
            />
          
    
        </div>
      </div>
    </>
  );
}
