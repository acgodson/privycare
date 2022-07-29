import React, { useEffect, useState, useContext } from "react";
import CardProfile from "../components/Cards/CardProfile";
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

// type content = ToastContent;

const isBlank = (s: string | null | void) => s != null && s.trim() === "";
const isPresent = (s: string | null | void) => !isBlank(s);

const buttonStyle =
  "active:bg-teal-400 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150";

export default function Profile()  {
  const session = useSession();
  const router = useRouter();
  // const [showError, setShowError] = useState<boolean>(false);
  const [profileComplete, setProfileComplete] = useState<boolean>(true);
  // const [avatar, setAvatar] = useState<FieldInstance | null>(null);
  // const [avatarSrc, setAvatarSrc] = useState<string | null>(null);
  const [editEnabled, setEditEnabled] = useState(false);
  const [creator, setCreator] = useCreator();
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
  const [creatorData, setCreatorData] = useState<CreatorData>({
    provider: "",
    title: "",
    company: "",
    about: "",
  });

  function submitEnabled() {
    return Object.values(userData).every(isPresent);
  }

  function updateUserData(data: Partial<UserDataInput>) {
    setUserData({ ...userData, ...data });
  }

  function updateCreatorData(data: Partial<CreatorData>) {
    setCreatorData({ ...creatorData, ...data });
  }

  useEffect(() => {
    //Fetch  Users Personal Data from Privy
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

        // If user is a creator, fetch work profile from privy
        if (creator) {
          //User is a Creator
          const getCreator = await session.privy.get(session.address, [
            "provider",
            "title",
            "company",
            "about",
          ]);
          updateCreatorData(formatCreatorData(getCreator));
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchDataFromPrivy();
  }, [session]);

  async function saveUserData() {
    try {
      await session.privy.put(session.address, [
        {
          field: "firstname",
          value: userData.firstname,
        },
        {
          field: "lastname",
          value: userData.lastname,
        },
        {
          field: "email",
          value: userData.email,
        },
        {
          field: "phone",
          value: userData.phone,
        },
        {
          field: "street",
          value: userData.street,
        },
        {
          field: "city",
          value: userData.city,
        },
        {
          field: "state",
          value: userData.state,
        },
        {
          field: "zip",
          value: userData.zip,
        },
      ]);

   if (creator) {

     await session.privy.put(session.address, [
      {
        field: "provider",
        value: userData.firstname + " " + userData.lastname,
      },
      
      {
        field: "title",
        value: creatorData.title,
      },
      {
        field: "company",
        value: creatorData.company,
      },
      {
        field: "about",
        value: creatorData.about,
      },
      ])
   }

     

      router.push("/");
    } catch (e) {
      const _e = e as string;
      // setShowError(true);
      console.log(e);
      toast.error(_e);
    }
  }

  async function uploadAvatar(file: File) {
    try {
      const avatar = await session.privy.putFile(
        session.address,
        "avatar",
        file
      );
      const avatarFileId = avatar.value;
      updateUserData({ avatar: avatarFileId });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <ToastContainer pauseOnHover draggable hideProgressBar={false} />

      <Sidebar user={session.address} />
      <Navbar user={session.address} />

      <div className="relative md:ml-64 bg-blueGray-100">
        <div className="relative md:ml-0 bg-blueGray-100 t-60">
          <div className="px-4 md:px-10 mx-auto w-full -m-24 mt-1">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4 mt-8">
                <ProfileSettings
                  userData={userData}
                  onUpdate={updateUserData}
                  onAvatarUpdate={uploadAvatar}
                  submitEnabled={submitEnabled()}
                  onSubmit={saveUserData}
                  editDisabled={editEnabled}
                  editEnabled={() => {
                    setEditEnabled(true);
                  }}
                  creator={creator}
                  creatorData={creatorData}
                  onCreate={updateCreatorData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function ProfileSettings(props: {
  userData: UserDataInput;
  creatorData: CreatorData;
  onUpdate: (state: Partial<UserDataInput>) => void;
  onCreate: (state: Partial<CreatorData>) => void;
  onAvatarUpdate: (avatar: File) => void;
  submitEnabled: boolean;
  editDisabled: boolean;
  onSubmit: () => void;
  editEnabled: () => void;
  creator: boolean;
}) {
  console.log(props.creator);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>

            {!props.editDisabled ? (
              <div
                onClick={() => props.editEnabled()}
                className="flex items-center w-50 text-teal-500 cursor-pointer"
              >
                <h3>Edit</h3> <i className="fa fa-edit ml-3"></i>
              </div>
            ) : (
              <button
                className={
                  props.submitEnabled
                    ? "bg-teal-200 + font-bold uppercase text-white text-xs px-4 py-2 rounded"
                    : "bg-teal-500 " + buttonStyle
                }
                type="button"
                id="submit"
                // disabled={!props.submitEnabled}
                onClick={(e) => {
                  e.preventDefault();
                  props.onSubmit();
                }}
              >
                Save
              </button>
            )}
          </div>
        </div>

        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <InputField
                label="first-name"
                type="text"
                value={props.userData.firstname}
                disabled={!props.editDisabled}
                onChanged={(e) => props.onUpdate({ firstname: e.target.value })}
              />
              <InputField
                label="last-name"
                type="text"
                value={props.userData.lastname}
                disabled={!props.editDisabled}
                onChanged={(e) => props.onUpdate({ lastname: e.target.value })}
              />
              <InputField
                label="email address"
                type="email"
                value={props.userData.email}
                disabled={!props.editDisabled}
                onChanged={(e) => props.onUpdate({ email: e.target.value })}
              />

              <InputField
                label="phone"
                type="telephone"
                value={props.userData.phone}
                disabled={!props.editDisabled}
                onChanged={(e) => props.onUpdate({ phone: e.target.value })}
              />
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <InputField
                label="address"
                type="address"
                value={props.userData.street}
                disabled={!props.editDisabled}
                onChanged={(e) => props.onUpdate({ street: e.target.value })}
              />

              <InputField
                label="city"
                type="address"
                value={props.userData.city}
                disabled={!props.editDisabled}
                onChanged={(e) => props.onUpdate({ city: e.target.value })}
              />
              <InputField
                label="state"
                type="address"
                value={props.userData.state}
                disabled={!props.editDisabled}
                onChanged={(e) => props.onUpdate({ state: e.target.value })}
              />
              <InputField
                label="zip code"
                type="zip"
                value={props.userData.zip}
                disabled={!props.editDisabled}
                onChanged={(e) => props.onUpdate({ zip: e.target.value })}
              />
            </div>

            {/* For Creators(e.g Doctors and health Pros) Only */}

            {props.creator && (
              <>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Service Information
                </h6>

                <div className="flex flex-wrap">
                  <InputField
                    label="specialty"
                    type="text"
                    value={props.creatorData.title}
                    disabled={!props.editDisabled}
                    onChanged={(e) => props.onCreate({ title: e.target.value })}
                  />

                  <InputField
                    label="company"
                    type="text"
                    value={props.creatorData.company}
                    disabled={!props.editDisabled}
                    onChanged={(e) =>
                      props.onCreate({ company: e.target.value })
                    }
                  />
                  <InputField
                    label="about"
                    type="text"
                    value={props.creatorData.about}
                    disabled={!props.editDisabled}
                    onChanged={(e) => props.onCreate({ about: e.target.value })}
                  />
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
