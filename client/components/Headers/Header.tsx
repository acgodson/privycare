import React from "react";
import CardStats from "../Cards/CardStats";



export default function HeaderStats() {
  return (
    <>
  
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
      
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                <CardStats
                  statSubtitle="Total Appointments"
                  statTitle="0"
                  statNextValue=""
                  statNextValueColor="text-emerald-500"
                  statDescripiron="Next Appointment"
                  statIconName="fas fa-clock"
                  statIconColor="bg-red-500"
                />
              </div>
      
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TOtal SUBS"
                  statTitle="0"
                  statNextValue=""
                  statNextValueColor="text-orange-500"
                  statDescripiron="Next Payment"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="ToTal messages"
                  statTitle="0"
                  statNextValue=""
                  statNextValueColor="text-emerald-500"
                  statDescripiron="Last messge"
                  statIconName="fas fa-inbox"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
