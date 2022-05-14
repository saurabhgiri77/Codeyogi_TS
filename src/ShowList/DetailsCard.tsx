import React, { useContext } from "react";
import axios from "axios";
// import { DateTime } from "luxon";
import MDEditor from "@uiw/react-md-editor";
import Popup from "./Popup";
// import { useForm } from "./form";
import AlertContext from "./AlertContext";
import Alerts from "../AppList/Alerts";

function DeatailsCard({ props }: any) {
  const [popup, setPopup] = React.useState(false);
  const [validUrl, setValidUrl] = React.useState(true);
  const [urlError, setUrlError] = React.useState("");

  const alert: any = useContext(AlertContext);

  // const onSubmit = () => {
  //   if (formData === "") {
  //     return;
  //   } else {
  //     try {
  //       urlValidator.validateSync(formData.popup);
  //       setValidUrl(true);
  //       setPopup(false);
  //       console.log("Calling api with", formData.popup);
  //       alert.showAlert("submitted successfully");
  //       axios.put(
  //         `https://api.codeyogi.io/assignment/${props.id}/submi`,
  //         { formData },
  //         { withCredentials: true }
  //       );
  //     } catch (e: any) {
  //       setUrlError(e.message);
  //       setValidUrl(false);
  //       console.log(e.message);
  //       alert.showAlert(e.message, "error", 5);
  //       return;
  //     }
  //   }
  // };

  // const { formData, inputsChange, submit, urlValidator } = useForm(
  //   {
  //     popup: "",
  //   },
  //   onSubmit
  // );

  const popupClose = () => {
    setPopup(false);
    setValidUrl(true);
  };

  // const dueDate = DateTime.fromISO(props.due_date).toLocaleString(
  //   DateTime.DATE_FULL
  // );

  return (
    <div>
      <div className="fixed top-0 right-0 m-4">
        <Alerts />
      </div>
      <div className="h-full bg-gray-100 flex flex-col justify-center">
        <div className="p-4 bg-white rounded-lg space-y-2 mb-2 mx-8">
          <h1 className="border-b-2 pb-4 font-semibold">
            #{props.id} Assignment Details
          </h1>
          <div className="text-gray-500">
            <div className="flex justify-between border-b-2 py-4">
              <h1>Title</h1>
              <h1>{props.title}</h1>
            </div>
            <div className="flex justify-between border-b-2 py-4 ">
              <h1>Due date</h1>
              <h1>{}</h1>
            </div>
            <div className="flex justify-between space-x-52 border-b-2 py-4">
              <h1>Description</h1>
              <MDEditor.Markdown
                className="!text-sm"
                source={props.description}
              />
            </div>
            <div className="flex space-x-8 py-4 pb-8">
              <button
                onClick={() => setPopup(true)}
                className="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Re-submit
              </button>
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
                See Your Submission
              </a>
            </div>
          </div>
        </div>
      </div>
      {popup && (
        <Popup
          id={props.id}
          // onSubmit={submit}
          name="popup"
          // value={formData.popup}
          // onChange={inputsChange}
          popupClose={popupClose}
          validUrl={!validUrl}
          error={urlError}
        />
      )}
    </div>
  );
}

export default DeatailsCard;
