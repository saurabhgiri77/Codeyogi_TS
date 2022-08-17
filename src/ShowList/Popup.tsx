import React, { FC } from "react";
import { popup } from "../type/type";

type prop = { props: popup };

const Popup = (props: any) => {
  return (
    <form
      onSubmit={props.onSubmit}
      className=" fixed items-center flex justify-center top-0 left-0 h-screen w-screen"
    >
      <div className="bg-gray-100 px-8 py-8 space-y-6 rounded-lg -mt-4">
        <div className="space-x-20 flex text-xl font-semibold border-b-2 pb-8 justify-center">
          <h1>Submit your assignment #{props.id}link</h1>
          <button
            className="bg-red-500 rounded-full px-2 text-white"
            onClick={props.popupClose}
            type="reset"
          >
            X
          </button>
        </div>
        <div className="space-x-20 flex justify-between">
          <input
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            className="rounded-lg px-4 py-2"
            placeholder="Put here your link"
          />
          <button
            onClick={props.onSubmit}
            className="px-4 py-2 rounded-md bg-indigo-500 text-white"
          >
            Submit
          </button>
        </div>
        <div className="h-2">
          {props.validUrl && (
            <span className="text-red-500 text-center font-semibold">
              {props.error}
            </span>
          )}
        </div>
      </div>
    </form>
  );
};

export default Popup;
