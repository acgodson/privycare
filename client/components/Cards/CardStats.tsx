
import React from "react";
import PropTypes from "prop-types";



export default function CardStats( props: {
  statSubtitle : string,
  statTitle : string,
  statNextValue : string,
  statNextValueColor : string,
  statDescripiron : string,
  statIconName : string,
  statIconColor : string,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-700  uppercase font-bold text-xs">
                {props.statSubtitle}
              </h5>
              <span className="font-bold text-xl text-blueGray-700">
                {props.statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  props.statIconColor
                }
              >
                <i className={props.statIconName}></i>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-700 mt-4">
            <span className={props.statNextValueColor + " mr-2 font-semibold"}>
            
              {props.statNextValue}
            </span>
            <span className="whitespace-nowrap font-semibold">{props.statDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
}

CardStats.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statNextValue: "3.48",
  statNextValueColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statNextValue: PropTypes.string,
  statNextValueColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  statIconColor: PropTypes.string,
};
