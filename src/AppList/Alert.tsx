import React from "react";
import cn from "classnames";
function Alert({ alert, setAlert }: any) {
  alert.type = alert.type || "success";

  let theme = cn(
    "px-6 py-3 text-white text-lg space-x-4 rounded-lg font-semibold",
    {
      "bg-red-600": alert.type === "error",
      "bg-green-500": alert.type === "success",
    }
  );

  return (
    <>
      {alert && (
        <div className={theme}>
          <span>{alert.message}</span>
          <button
            className="bg-red-500 rounded-full px-2 text-bold"
            onClick={() =>
              setAlert((latestAlerts: any) => {
                console.log("latest", latestAlerts);
                return latestAlerts.filter((a: any) => a.id !== alert.id);
              })
            } // TODO: work
          >
            X
          </button>
        </div>
      )}
    </>
  );
}

export default Alert;
