import axios from "axios";
import { assignment, lecture, profileType, users } from "../type/type";

export type students = { results: users[] };

export type profile = { data: profileType[] };

export async function getassignmentsApi() {
  const promise = await axios.get<assignment[]>(
    "https://api.codeyogi.io/batches/1/assignments",
    {
      withCredentials: true,
    }
  );

  const assignments = promise.data;
  localStorage.setItem("assignments", JSON.stringify(assignments));
  return assignments;
}

export async function getStudentsApi() {
  const promise = await axios.get<students>(
    "https://randomuser.me/api/?results=31"
  );
  const Students = promise.data.results;
  localStorage.setItem("Students", JSON.stringify(Students));
  return Students;
}

export async function getLecturesApi() {
  const promise = await axios.get<lecture[]>(
    "https://api.codeyogi.io/batches/1/sessions",
    {
      withCredentials: true,
    }
  );
  const lectures = promise.data;
  localStorage.setItem("lectures", JSON.stringify(lectures));
  return lectures;
}

export const getProfileApi = async () => {
  const promise = await axios.get<profile>("https://api.codeyogi.io/me", {
    withCredentials: true,
  });
  const lectures = promise.data.data;
  return lectures;
};
