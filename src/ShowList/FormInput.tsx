import { useField } from "formik";
import React, { useContext } from "react";
import AlertContext from "./AlertContext";

function FormInput(props: any) {
  const [field, meta] = useField(props.name);

  const data: any = useContext(AlertContext);

  React.useEffect(() => {
    if (meta.error) {
      data.showAlert(meta.error, "error", 5);
    }
  }, [meta.error]);

  return (
    <div className="flex justify-between px-10 py-6 border-y border-gray-200">
      <h3 className="text-gray-500 font-semibold text-sm w-64">
        {props.children} <span className="text-red-600 text-lg">*</span>
      </h3>
      <div>
        <input
          type={props.type}
          name={props.name}
          onChange={field.onChange}
          value={field.value}
          onBlur={field.onBlur}
          className="py-2 bg-gray-100 border border-gray-400 rounded-lg w-96 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
        />
        <div className="h-2">
          {meta.touched && meta.error && (
            <span className="text-red-500 text-sm">{meta.error}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormInput;
