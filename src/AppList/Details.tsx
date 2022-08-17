import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DeatailsCard from "../ShowList/DetailsCard";

function Details() {
  const { id } = useParams();
  console.log("id is", id);

  let [detail, setDetail] = React.useState([]);

  React.useEffect(() => {
    const token = axios.get(`https://api.codeyogi.io/assignments/${id}`, {
      withCredentials: true,
    });
    token.then((response) => {
      setDetail(response.data);
      console.log(response.data);
    });
  }, []);

  if (!detail) {
    return <></>;
  }

  return <div>{<DeatailsCard props={detail} />}</div>;
}

export default Details;
