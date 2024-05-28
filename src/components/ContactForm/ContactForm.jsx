import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { addContact } from "../../redux /contactsSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required").min(3).max(50),
          number: Yup.string().required("Number is required").min(3).max(15),
        })}
        onSubmit={(values, { resetForm }) => {
          const id = nanoid();
          dispatch(addContact({ ...values, id }));
          resetForm();
        }}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor={nameId} className="block text-gray-700">Name</label>
            <Field
              type="text"
              name="name"
              id={nameId}
              className="mt-1 block w-full p-2 border rounded-md"
            />
            <ErrorMessage
              name="name"
              as="span"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor={numberId} className="block text-gray-700">Number</label>
            <Field
              type="text"
              name="number"
              id={numberId}
              className="mt-1 block w-full p-2 border rounded-md"
            />
            <ErrorMessage
              name="number"
              as="span"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
