import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

function MainLayout() {
  let history = useNavigate();

  return (
    <div className="flex items-stretch h-full top-0">
      <SideBar />
      <div className="bg-gray-100 p-6 grow">
        <div className="flex justify-end mr-6">
          <button
            className="rounded-full border border-gray-700 bg-gray-200 hover:bg-gray-400"
            onClick={() => history("/lectures")}
          >
            <img
              className="w-10"
              src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-38-512.png"
            />
          </button>
        </div>
        <Outlet />
        <h1 className="text-white bg-black text-xl px-6 py-2 font-bold rounded-xl text-center">
          Made with ❤❤ at CodeYogi
        </h1>
      </div>
    </div>
  );
}

export default MainLayout;
