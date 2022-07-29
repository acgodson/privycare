import React from "react";
import { InputField } from "./Cards/InputField";


export const CreatePlan =() =>  {

    return (
        <div>
        <div>
          
          <InputField
            label={"Plan Duration"}
            type={"text"}
            value={"30 Days"}
            onChanged={() => {}}
            disabled={true}
          />
           <InputField
            label={"Plan Name"}
            type={"text"}
            value={""}
            onChanged={() => {}}
            disabled={true}
          />
          
           <InputField
            label={"Suscripion amount"}
            type={"text"}
            value={"80"}
            onChanged={() => {}}
            disabled={false}
          />
   
          <button className="ml-3 mt-3 mb-3 justify-self-center github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-teal-500 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg">
            Create New Plan
          </button> 
          <br />  
          {/* <label><small>By creating a plan,  some of your details would 
           become accessible to the general audience
           </small></label>   */}
        </div>
   
         <img className="mt-20 center absolute top-0  align-items-center justify-center"  src="img/banner.svg" alt=""
         style={{
           height: "143px",
         zIndex: "-8",
         opacity: "0.7",
         marginLeft: "370px"
         }}
         />
     
   
        </div>
    );

}