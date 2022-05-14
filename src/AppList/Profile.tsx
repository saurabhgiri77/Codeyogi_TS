import React, { useContext, useEffect } from "react";
import { Form, Formik } from "formik";
import FormInput from "../ShowList/FormInput";
import { number, object, string } from "yup";
import { getProfileApi } from "../ShowList/Api";
import AlertContext from "../ShowList/AlertContext";
import { DateTime } from "luxon";
import Loader from "../ShowList/Loader";
import Alerts from "./Alerts";
// import { profileType } from "../type/type";

function Profile() {
  const [profile, setProfile]: any = React.useState("");
  const [search, setSearch] = React.useState(true);

  const data: any = useContext(AlertContext);

  useEffect(() => {
    const promise = getProfileApi();
    promise.then((data) => {
      console.log("data is", data);
      setProfile(data);
      setSearch(!search);
    });
  }, []);

  const onSubmit = (event: any) => {
    console.log(event);
    data.showAlert("updated successfully");
  };

  const validationSchema = object().shape({
    email: string().required().email(),
    phone: number().required(),
    passoutYear: number().required(),
  });

  const dob = DateTime.fromISO(profile.date_of_birth).toLocaleString(
    DateTime.DATE_SHORT
  );

  const initialValues = {
    fname: profile.first_name,
    lname: profile.last_name,
    email: profile.email,
    institute: "Government polytechnic Dehradun",
    passoutYear: profile.year_of_pass_out,
    phone: profile.phone_no,
    DOB: dob,
    device: profile.work_device,
    roll_no: profile.institute_roll_no,
    branch: profile.branch,
  };

  if (!profile) {
    return <></>;
  }

  return (
    <div>
      {search && <Loader />}
      <div className="bg-gray-100 m-6 items-center grow space-y-2">
        <div className="fixed top-0 right-0 m-4">
          <Alerts />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="bg-gray-50 py-2 shadow-lg rounded-lg">
              <h1 className=" text-xl font-semibold mb-4 px-4">
                Personal details
              </h1>
              <FormInput name="fname" type="text">
                First Name
              </FormInput>
              <FormInput name="lname" type="text">
                Last Name
              </FormInput>
              <FormInput name="email" type="email">
                Email Address
              </FormInput>
              <FormInput name="institute" type="text">
                Institute Name
              </FormInput>
              <FormInput name="passoutYear" type="number">
                Year Of Passout
              </FormInput>
              <FormInput name="phone" type="number">
                Phone Number
              </FormInput>
              <FormInput name="DOB" type="text">
                Date Of Birth
              </FormInput>
              <FormInput name="device" type="text">
                Device you are using to do your assignments
              </FormInput>
              <FormInput name="roll_no" type="number">
                Institute roll no.
              </FormInput>
              <FormInput name="branch" type="text">
                Branch
              </FormInput>
              <button
                type="submit"
                className="disabled:bg-gray-400 px-8 py-2 text-lg text-white bg-indigo-600 mx-4 my-4 rounded-lg hover:bg-indigo-800"
              >
                Update
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Profile;
