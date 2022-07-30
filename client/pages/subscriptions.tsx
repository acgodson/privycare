import React, { useEffect, useState } from "react";
import { useSession } from "../components/session";
import DoctorProfile from "../components/Cards/doctorProfile";
import { getPlans } from "../ethereum";
//import SearchHeader from "../components/Headers/Search";
import { URL } from "../config";
import { CreatorData, formatCreatorData } from "../shared";
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormControl from "@material-ui/core/FormControl";
import DatePicker from "react-date-picker";

import Modal from "../components/Modal/modal";
import { InputField } from "../components/Cards/InputField";

export default function Subscriptions() {
  const session = useSession();
  const [fetching, setFetching] = useState<boolean>(false);
  const [creators, setCreators] = useState<CreatorData[]>([]);

  // const classes = useStyles();
  const [showModal, setshowModal] = useState<boolean>(false);
  const [value, onChange] = useState(new Date());

  function handleModal() {
    if (showModal) {
      setshowModal(false);
    } else {
      setshowModal(true);
    }
  }

  useEffect(() => {
    const fetchPlans = async () => {
      setFetching(true);
      if (creators?.map((x) => x.title.length < 1)) {
        try {
          const request = await fetch(`${URL}/users`);

          if (!request.ok) {
            setFetching(false);
            const error = await request.json();
            throw Error(error.message);
          }

          const list = await request.json();

          for (var i = 0; i < list.length; i++) {
            // Fetch creators's fields
            const response = await session.privy.get(list[i], [
              "provider",
              "title",
              "company",
              "about",
            ]);

            if (response) {
              // creators.push(creatorData);
              setCreators([...creators, formatCreatorData(response)]);
            }

            console.log(creators);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchPlans();
  }, [creators, session.privy ]);

  return (
    <>
      <div>
        <div className="px-3 mx-auto w-full ">
          <div className="relative md:mx-22 bg-transparent">
            <div>
              <div className="mx-auto w-full ">
                <div className="flex flex-row w-full justify-center xl: justify-start">
                  {creators.length > 0 ? (
                    <ol type="1">
                      {[
                        creators.map((x, i) => (
                          <li key={i}>
                            <div className=" flex flex-row w-full xl: mb-12 xl:mb-0 px-2">
                              <DoctorProfile
                                name={x.provider}
                                job={x.title}
                                location={x.about}
                                showModal={showModal}
                                handleModal={handleModal}
                              />
                            </div>
                          </li>
                        )),
                      ]}
                    </ol>
                  ) : (
                    <div>privy-node is offline</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {showModal && (
            <Modal
              style={{
                minHeight: "50vh",
                paddingTop: "12px",
                paddingBottom: "12px",
                top: "20px",
                marginTop: "15px",
                overflow: "hidden",
                background: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              closeModal={handleModal}
              big={""}
            >
              <div className="px-6">
                <label>Choose an Appointment date:</label>

                <InputField
                  type="date"
                  value="2018-07-22"
                  label={""}
                  onChanged={() => {}}
                  disabled={false}
                />
              </div>

              <div className="px-6 h-15">
                <button
                  onClick={() => handleModal()}
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-teal-500 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  Submit Notification
                </button>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};
