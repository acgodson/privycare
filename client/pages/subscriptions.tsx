import React, { useEffect, useState } from "react";
import { useSession } from "../components/session";
import DoctorProfile from "../components/Cards/doctorProfile";
//import SearchHeader from "../components/Headers/Search";
import { URL } from "../config";
import { CreatorData, formatCreatorData, Today } from "../shared";

import Modal from "../components/Modal/modal";
import { InputField } from "../components/Cards/InputField";

export default function Subscriptions() {
  const session = useSession();
  const [fetching, setFetching] = useState<boolean>(false);
  const [creators, setCreators] = useState<CreatorData[]>([]);
  const [planIDs, setPlanIDs] = useState<string[]>([]);
  const [date, setDate] = useState<string>(Today);
  const [showModal, setshowModal] = useState<boolean>(false);
  const [planIndex, setPlanIndex] = useState<number>(0);
  const plans: CreatorData[] = [];

  function handleModal() {
    if (showModal) {
      setshowModal(false);
    } else {
      setshowModal(true);
    }
  }

  useEffect(() => {
    console.log(planIndex);
  }, [planIndex]);

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

          setPlanIDs(list);

          for (var i = 0; i < list.length; i++) {
            // Fetch creators's fields
            const response = await session.privy.get(list[i], [
              "provider",
              "title",
              "company",
              "about",
            ]);

            plans.push(formatCreatorData(response));

            if (response) {
              // creators.push(creatorData);
            }
          }

          setCreators(plans);
          console.log(creators);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchPlans();
  }, []);

  async function sendNotification() {
    try {
      var headers = new Headers();
      
      headers.append("Content-Type", "application/json");

      var RequestInit = {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          user_id: [`${planIDs[planIndex]}`],
          message: "Hello Doctor, my next visit would be on the " + date,
        }),
      };

      const request = await fetch(`${URL}/users/send-email`, RequestInit);

      if (!request.ok) {
        setFetching(false);
        const error = await request.json();
        throw Error(error.message);
      }

      const data = await request.json();
      alert(data.Details);
    } catch (e) {
      console.log(e);
    }
  }

  function handleSubmit() {
    if (showModal) {
      setshowModal(false);
    }
    sendNotification();
  }

  return (
    <>
      <div>
        <div className="px-3 mx-auto w-full ">
          <div className="relative md:mx-22 bg-transparent">
            <div>
              <div className="mx-auto w-full ">
                <div className="flex flex-row w-full justify-center xl: justify-start">
                  {creators.length > 0 ? (
                    <ol
                      type="1"
                      className="flex flex-wrap w-full justify-center xl: justify-start"
                    >
                      {[
                        creators.map((x, i) => (
                          <li key={i}>
                            <div className=" flex flex-row w-full xl: mb-12 xl:mb-0 px-2">
                              <DoctorProfile
                                onTap={() => {
                                 setPlanIndex(i);
                                }}
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
                  value={date}
                  label={""}
                  onChanged={(e) => setDate(e.target.value)}
                  disabled={false}
                />
              </div>

              <div className="px-6 h-15">
                <button
                  onClick={() => handleSubmit()}
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
}
