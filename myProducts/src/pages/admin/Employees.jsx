import React, { useEffect, useState } from "react";
import style from "./employees.module.scss";
import { Link } from "react-router-dom";
function Employees() {
  const [employees, setEmployees] = useState([]);

  async function getAllEmployees() {
    const res = await fetch("http://localhost:3000/employes");
    const data = await res.json();
    setEmployees(data);
  }
  useEffect(() => {
    getAllEmployees();
  }, []);

async function deleteEmployee(id){
 const res=await fetch("http://localhost:3000/employes/"+id,{
    method:"delete"
  })
  const data= await res.json()

   await getAllEmployees()
}

  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Job</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((x) => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>
                <img className={style.img} src={x.image} alt="" />
              </td>
              <td>
                <strong>{x.name}</strong>
              </td>
              <td>{x.job}</td>
              <td>
                <button> <Link to={"/AdminLayout/editEmployee/"+x.id}>update</Link> </button>
                <button onClick={()=>{deleteEmployee(x.id)}}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
