import React from "react";
import LectureList from "./AppList/LectureList";
import AssignmentList from "./AppList/AssignmentList";
import QuizPage from "./QuizPage";
import MainLayout from "./MainLayout";
import CantFound from "./CantFound";
import Details from "./AppList/Details";
import Profile from "./AppList/Profile";
import Students from "./AppList/Students";
import AlertContext from "./ShowList/AlertContext";
import { uniqueId } from "lodash";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [alerts, setAlert]: any = React.useState([]);
  let alert: any;
  const id = uniqueId();

  const removeAlert = () => {
    setAlert((latestAlerts: any) => {
      console.log("latest", latestAlerts);
      return latestAlerts.filter((a: any) => a.id !== alert.id);
    });
  };

  const showAlert = ({ message, type = "success", timeout = 3 }: any) => {
    alert = { message, type, id };
    setAlert([...alerts, alert]);

    timeout &&
      setTimeout(() => {
        removeAlert();
      }, timeout * 1000);
  };

  const setData = { alerts, showAlert, removeAlert, setAlert };

  return (
    <AlertContext.Provider value={setData}>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/lectures" />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="lectures" element={<LectureList />} />
            <Route path="assignments" element={<AssignmentList />} />
            <Route path="assignments/:id/details" element={<Details />} />
            <Route path="profile" element={<Profile />} />
            <Route path="students" element={<Students />} />
          </Route>

          <Route path="quiz" element={<QuizPage />} />

          <Route path="*" element={<CantFound />} />
        </Routes>
      </div>
    </AlertContext.Provider>
  );
}

export default App;
