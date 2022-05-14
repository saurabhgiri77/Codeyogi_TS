import React, { useContext } from "react";
import AlertContext from "../ShowList/AlertContext";
import Alert from "./Alert";

function Alerts() {
  const { alerts, setAlert }: any = useContext(AlertContext);

  return (
    <div className="space-y-1">
      {alerts.map((a: any) => (
        <Alert key={a.id} alert={a} setAlert={setAlert} />
      ))}
    </div>
  );
}

export default Alerts;
