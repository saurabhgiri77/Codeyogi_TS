import React, { useEffect, useState, FC } from "react";
import { getLecturesApi } from "../ShowList/Api";
import Lectures from "../ShowList/Lectures";
import { lecture } from "../type/type";
import Loader from "../ShowList/Loader";

const LectureList: FC = () => {
  // const catchedData = JSON.parse(localStorage.getItem("lectures")) || [];

  let [users, setUsers] = useState<lecture[]>([]);
  const [search, setSearch] = useState(true);

  useEffect(() => {
    const token = getLecturesApi();

    token.then((response) => {
      console.log("sessions aaya");
      console.log(response);
      setUsers(response);
      setSearch(!search);
    });
  }, []);

  return (
    <div className="bg-gray-100 m-6 items-center grow space-y-2">
      <div className="flex">
        <h1 className=" text-xl font-semibold mb-4">Lecture List</h1>
        {search && <Loader />}
      </div>
      <div className="bg-gray-50 py-2">
        {users.map((t, count) => {
          return (
            <Lectures key={t.id} Lectures={t} counts={count} a={users.length} />
          );
        })}
      </div>
    </div>
  );
};

export default LectureList;
