import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { addContact } from "../../redux /contacSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import "./ContactForm.css"

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  return (
    <div className="form-container">
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
        <div className="form-group">
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" as="span" />
        </div>

        <div className="form-group">
          <label htmlFor={numberId}>Number</label>
          <Field type="text" name="number" id={numberId} />
          <ErrorMessage name="number" as="span" />
        </div>
        <button type="submit" className="submit-btn">Add Contact</button>
      </Form>
    </Formik>
    </div>
  );
};
export default ContactForm;