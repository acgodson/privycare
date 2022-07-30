import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbars/HomeNavBar";
import { useSession, useCreator } from "../components/session";
import {
  formatUserData,
  UserDataInput,
  CreatorData,
  formatCreatorData,
} from "../shared";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar/SideBar";
import { InputField } from "../components/Cards/InputField";
import { toast, ToastContent, ToastContainer } from "react-toastify";
import HeaderStats from "../components/Headers/Header";
import Subscriptions from "./subscriptions";
import { FieldInstance } from "@privy-io/privy-browser/dist/fieldInstance";

const isBlank = (s: string | null | void) => s != null && s.trim() === "";
const isPresent = (s: string | null | void) => !isBlank(s);


export default function Dashboard() {
  const session = useSession();
  const router = useRouter();
  // const [showError, setShowError] = useState<boolean>(false);
  const [profileComplete, setProfileComplete] = useState<boolean>(true);
  const [userData, setUserData] = useState<UserDataInput>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    street: "",
    avatar: "",
    city: "",
    state: "",
    zip: "",
  });
  const [fetching, setFetching] = useState<boolean>(true);

  useEffect(() => {
    //Fetch  Users Personal Data from Privy
    function updateUserData(data: Partial<UserDataInput>) {
      setUserData({ ...userData, ...data });
    }
    async function fetchDataFromPrivy() {
      try {
        const response = await session.privy.get(session.address, [
          "username",
          "firstname",
          "lastname",
          "email",
          "phone",
          "street",
          "city",
          "state",
          "zip",
        ]);
        updateUserData(formatUserData(response));
        setFetching(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchDataFromPrivy();
  }, [session.address, session.privy, userData]);

  useEffect(() => {
    if (!fetching) {
      if (userData.email.length < 2) {
        router.push("/settings");
      }
    }
  }, [profileComplete, fetching, router, userData.email.length]);

  return (
    <>
      <ToastContainer pauseOnHover draggable hideProgressBar={false} />

      <Sidebar user={session.address} />
      <Navbar user={session.address} />

      <div className="relative md:ml-64 bg-blueGray-100">
        <div>
          <HeaderStats />
          <div className="px-4 mx-auto w-full ">
            <div className="relative md:mx-22 bg-transparent">
              <Subscriptions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
