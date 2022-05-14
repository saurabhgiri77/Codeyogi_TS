import MDEditor from "@uiw/react-md-editor";
import React, { FC } from "react";
import { lecture } from "../type/type";

type prop = { Lectures: lecture; counts: number; a: number };

const Lectures: FC<prop> = ({ Lectures, counts, a }) => {
  const start = new Date(Lectures.start_time).getTime();
  const end = new Date(Lectures.end_time).getTime();
  const diff = end - start;
  const ans = new Date(diff).toISOString();

  const nos = a - counts;

  return (
    <div className="p-4  mx-10 my-4 bg-white space-y-2 mb-2 border rounded-lg text-lg">
      <div className="font-semibold">
        <h1>Lecture #{nos}</h1>
      </div>
      <div className="flex justify-between">
        <h1 className="text-gray-500">Duration: {ans.substring(11, 19)}</h1>
      </div>
      <MDEditor.Markdown
        className=" !text-sm font-bold markdown"
        source={Lectures.topic}
      />
      <div className="flex justify-around pt-4">
        <a
          href={Lectures.recording_url}
          target="_blank"
          className="flex text-gray-600 text-base hover:text-green-800 font-semibold"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            className="w-4 h-4 sm:w-6 sm:h-6 mr-3"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"></path>
          </svg>
          Watch/Download Recording
        </a>
      </div>
    </div>
  );
};

export default Lectures;
