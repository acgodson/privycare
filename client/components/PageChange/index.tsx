import React from "react";


export default function PageChange() {
  return (
    <div>
      <div
        className="bg-cover bg-blueGray-400 fixed z-40 w-full h-full top-0 left-0"></div>
      <div className="top-0 left-0 w-full h-full block z-50 absolute bg-black bg-opacity-50"></div>
      <div className="my-32 mx-auto max-w-sm text-center relative z-50 top-0">
        <div className="block mb-4">
          <i className="fas fa-circle-notch animate-spin text-white mx-auto text-6xl"></i>
        </div>
      </div>
    </div>
  );
}
