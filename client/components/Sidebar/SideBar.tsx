import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import UserDropdown from "../Dropdowns/UserDropdown";

export default function Sidebar(props: { user: string }) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-blueGray-700 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer text-blueGray-400 opacity-70 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>

          <a
            href="#"
            className="md:block text-left md:pb-2 text-blueGray-200 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 text-xl"
          >
            privyCare
          </a>

          <ul className="md:hidden items-center flex flex-wrap list-none">
          
            <li className="inline-block relative">
              <UserDropdown openMeta={null} />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="text-xl md:block text-left md:pb-2 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                      style={{ color: "teal" }}
                    >
                      PrivyCare
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* User Address */}
            <div className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  readOnly={true}
                  value={props.user}
                  placeholder=""
                  className="bg-teal-200 opacity-50 border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </div>

            <hr className="my-4 md:min-w-full" />

            {/* Home Navigations */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <p
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/") !== -1
                      ? "text-teal-500 hover:text-lightBlue-200"
                      : "lg:text-white text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i
                    className={
                      "fas fa-home mr-2 text-sm " +
                      (router.pathname.indexOf("/") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  <Link
                    href={
                      router.pathname.indexOf("/dashboard") !== -1
                        ? "#"
                        : "/dashboard"
                    }
                  >
                    HOME
                  </Link>
                </p>
              </li>

           
              <li className="items-center">
                <p
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/settings") !== -1
                      ? "text-teal-500 hover:text-lightBlue-600"
                      : "lg:text-white text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i
                    className={
                      "fas fa-home mr-2 text-sm " +
                      (router.pathname.indexOf("/settings") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  <Link
                    href={
                      router.pathname.indexOf("/settings") !== -1
                        ? "#"
                        : "/settings"
                    }
                  >
                    SETTINGS
                  </Link>
                </p>
              </li>
            </ul>

            <hr className="my-4 md:min-w-full" />

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <p
                  className={
                    "text-xs uppercase py-3 font-bold block lg:text-white text-blueGray-700 hover:text-blueGray-500"
                  }
                >
                  <i
                    className={
                      "fas fa-share mr-2 text-sm " +
                      (router.pathname.indexOf("/home/settings") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  INVITE SOMEONE
                </p>
              </li>
            </ul>

            <hr className="my-4 md:min-w-full" />

            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              FEEDBACKS
            </h6>

            <ul className="lg:text-white md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="#">
                  <a
                    href="#"
                    className="lg:text-white text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fab fa-discord text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Discord Channel
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="#">
                  <a
                    href="#"
                    className="lg:text-white text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fab fa-github text-blueGray-400 mr-2 text-sm"></i>{" "}
                    GITHUB LINK
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs font-bold block pt-1 pb-4 no-underline">
              Copyright © {new Date().getFullYear()} Created by{" "}
              <a href="#" className="text-blueGray-500 hover:text-blueGray-800">
                PrivyCare
              </a>
            </h6>
          </div>
        </div>

        <div
          className="px-0 mx-auto"
          style={{
            background: 'url("../../img/br.png")',
            opacity: "0.1",
            position: "absolute",
            top: "0",
            height: "100%",
            width: "100%",
            zIndex: "-99",
          }}
        ></div>
      </nav>
    </>
  );
}
