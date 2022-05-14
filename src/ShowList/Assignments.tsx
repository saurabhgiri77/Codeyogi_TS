import axios from "axios";
import React, { useContext, FC } from "react";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import Popup from "./Popup";
// import { useForm } from "./forms";
import Alerts from "../AppList/Alerts";
import AlertContext from "./AlertContext";
import { assignment } from "../type/type";
import { string } from "yup";

type prop = { props: assignment };

const Assignments: FC<prop> = ({ props }) => {
  const [popup, setPopup] = React.useState(false);
  const [submissionLink, setSubmissionLink] = React.useState("");
  const [validUrl, setValidUrl] = React.useState(true);
  const [urlError, setUrlError] = React.useState("");

  const alert: any = useContext(AlertContext);

  const submit = (event: any) => {
    event.preventDefault();
    if (submissionLink === "") {
      return;
    } else {
      const urlValidator = string().url("URL is not valid");
      try {
        urlValidator.validateSync(submissionLink);
        setValidUrl(true);
        setSubmissionLink("");
        setPopup(false);
        console.log("Calling api with", submissionLink);
        axios.put(
          `https://api.codeyogi.io/assignment/${props.id}/submi`,
          { submissionLink },
          { withCredentials: true }
        );
      } catch (e: any) {
        setUrlError(e.message);
        setValidUrl(false);
        alert.showAlert(e.message, "error", 5);
        return;
      }
    }
  };

  const onInputChange = (event: any) => {
    setSubmissionLink(event.target.value);
  };

  const popupClose = () => {
    setPopup(false);
    setValidUrl(true);
    setSubmissionLink("");
  };

  const submitDate = DateTime.fromISO(props.updated_at).toLocaleString(
    DateTime.DATE_MED
  );

  const dueDate = DateTime.fromISO(props.due_date).toLocaleString(
    DateTime.DATE_FULL
  );

  return (
    <div
      className={
        "pt-4 pl-4 pr-4 mx-10 my-4 space-y-2 mb-2 border rounded-lg text-lg bg-white shadow-lg"
      }
    >
      <div className="fixed top-0 right-0 m-4">
        <Alerts />
      </div>
      <Link to={`/assignments/${props.id}/details`}>
        <div className="flex space-x-2 font-semibold">
          <h1>#{props.id}</h1>
          <h1>{props.title}</h1>
          <h1 className="text-gray-500">({submitDate})</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="text-red-500 text-base">Due Date: {dueDate}</h1>
          <h1 className="text-green-600 text-lg font-semibold">Submitted</h1>
        </div>
      </Link>
      <div className="flex justify-around pt-4">
        <button
          onClick={() => setPopup(true)}
          className="text-green-600 hover:text-green-800 flex items-center"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            className="mr-4  w-4 h-4 sm:w-6 sm:h-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
          </svg>{" "}
          Re-submit
        </button>
        <div className="h-12 bg-gray-300 px1"></div>
        <a
          // href={props.submissions[0].submission_link}
          target="_blank"
          className="text-indigo-500 hover:text-blue-800 flex items-center"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            className="inline"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"></path>
          </svg>
          Check your submission
        </a>
      </div>
      {popup && (
        <Popup
          id={props.id}
          onSubmit={submit}
          name="popup"
          value={submissionLink}
          onChange={onInputChange}
          popupClose={popupClose}
          validUrl={!validUrl}
          error={urlError}
        />
      )}
    </div>
  );
};

export default Assignments;
