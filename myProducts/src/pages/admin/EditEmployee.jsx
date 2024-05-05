import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./edit.module.scss";
import { useParams } from "react-router-dom";
function EditEmployee() {

  let { id } = useParams();

  const [employee, setEmployee] = useState(null);
  useEffect(() => {
    async function getEmployeeById() {
      const res = await fetch("http://localhost:3000/employes/" + id);
      const data = await res.json();
      setEmployee(data);
    }
    getEmployeeById();
  }, []);

  async function updateEmployee(values) {
    const res = await fetch("http://localhost:3000/employes/"+id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(values),
    });

    const data = await res.json();
    return data;
  }
  return (
    <div className={style.container}>
     {employee&& (
      <Formik
        initialValues={{ image:employee.image, name:employee.name, job:employee.job }}
        validationSchema={Yup.object({
          image: Yup.string().max(200).required("Required"),
          name: Yup.string().max(50).required("Required"),
          job: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          updateEmployee(values).then(()=>navigate("/AdminLayout/employees"));
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
     )
     }
    </div>
  );
}

export default EditEmployee;
