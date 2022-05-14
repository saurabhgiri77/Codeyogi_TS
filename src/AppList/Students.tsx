import React, { useEffect, useState } from "react";
import StudentsData from "../ShowList/StudentsData";
import { getStudentsApi } from "../ShowList/Api";
import Loader from "../ShowList/Loader";
import { users } from "../type/type";

function Students() {
  // const catchedData = JSON.parse(localStorage.getItem("Students")) || [];

  let [users, setUsers] = useState<users[]>([]);
  const [search, setSearch] = useState(true);

  useEffect(() => {
    const token = getStudentsApi();

    token.then((response) => {
      console.log("data aaya");
      console.log(response);
      setUsers(response);
      setSearch(!search);
    });
  }, []);

  return (
    <div className="bg-gray-100 m-6 space-y-2">
      <div className="flex">
        <h1 className=" text-xl font-semibold mb-4">Student List</h1>
        {search && <Loader />}
      </div>
      <div className="bg-gray-50 py-6 px-10">
        <div className="flex bg-white flex-wrap justify-around">
          {users.map((e) => {
            return <StudentsData user={e} />;
          })}

          <span className="w-56"></span>
          <span className="w-56"></span>
        </div>
      </div>
    </div>
  );
}

export default Students;
