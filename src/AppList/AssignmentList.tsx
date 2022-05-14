import React, { FC } from "react";
import Assignments from "../ShowList/Assignments";
import Loader from "../ShowList/Loader";
import { getassignmentsApi } from "../ShowList/Api";
import { assignment } from "../type/type";

const AssignmentList: FC = () => {
  // const catchedData = JSON.parse(localStorage.getItem("assignments")) || [];

  let [users, setUsers] = React.useState<assignment[]>([]);
  const [search, setSearch] = React.useState(true);

  React.useEffect(() => {
    const token = getassignmentsApi();

    token.then((response) => {
      console.log("assignments aaye");
      console.log(response);
      setUsers(response);
      setSearch(false);
    });
  }, []);

  return (
    <div className="bg-gray-100 m-6 items-center grow space-y-2">
      <div className="flex">
        <h1 className=" text-xl font-semibold mb-4">Assignment List</h1>
        {search && <Loader />}
      </div>
      <div className="bg-gray-50 py-4 shadow-lg">
        {users.map((t) => {
          return <Assignments key={t.id} props={t} />;
        })}
      </div>
    </div>
  );
};

export default AssignmentList;
