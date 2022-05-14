import React from "react";
import { string } from "yup";

export const useForm = (initialData, onSubmit) => {
  const urlValidator = string().url("URL is not valid");
  const [formData, setFormData] = React.useState(initialData);

  const inputsChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    onSubmit(event);
    setFormData("");
  };
  return { formData, inputsChange, submit, urlValidator };
};
