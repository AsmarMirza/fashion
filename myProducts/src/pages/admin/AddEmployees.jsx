import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./add.module.scss";
function AddEmployees() {


  async function addEmployee(values){
const res=await fetch("http://localhost:3000/employes",  {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  method: "POST",
  body: JSON.stringify(values),
})
const data=await res.json();
return data;
  }
  return (
    <div className={style.container}>
      <Formik
        initialValues={{ image: "", name: "", job: "" }}
        validationSchema={Yup.object({
          image: Yup.string().max(150).required("Required"),
          name: Yup.string().max(50).required("Required"),
          job: Yup.string().required("Required"),
        })}
        onSubmit={(values,{resetForm}) => {
         addEmployee(values)
         .then(() => {
          resetForm();
        })
       
         
        }}
      >
        <Form>
          <label htmlFor="image">Image</label>
          <br />
          <Field name="image" type="text" />
          <br />
          <ErrorMessage name="image" />

          <label htmlFor="name"> Name</label>
          <br />
          <Field name="name" type="text" />
          <br />
          <ErrorMessage name="name" />

          <label htmlFor="job">Job</label>
          <br />
          <Field name="job" type="text" />
          <br />
          <ErrorMessage name="job" />

          <button className={style.btn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddEmployees;
