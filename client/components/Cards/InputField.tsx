import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export function InputField(props: {
  label: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChanged: ChangeEventHandler<HTMLInputElement>;
  disabled: boolean;
}) {
  return (
    <>
      <div className="w-full lg:w-6/12 px-4">
        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            {props.label}
          </label>
          <input
            type={props.type}
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            defaultValue={props.value}
            onChange={props.onChanged}
            readOnly={props.disabled}
          />
        </div>
      </div>
    </>
  );
}
