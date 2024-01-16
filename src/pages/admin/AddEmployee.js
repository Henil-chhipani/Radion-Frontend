import React, { useState } from "react";
import {} from "@mui/material";
import { MDBInput, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const AddEmployee = () => {
  const [employee, SetemployeeData] = useState({
    EmplyeeName: "",
    EmplyeeEmail: "",
    EmplyeePhone: "",
    EmplyeePassword: "",
  });

  let id, value;
  const handleInputs = (e) => {
    console.log(e);
    id = e.target.id;
    value = e.target.value;
    SetemployeeData({ ...employee, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/employee", {
      method: "POST",
      body: JSON.stringify(employee),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.text();
    console.log(data);
  };

  return (
    <>
      <form
        style={{ marginRight: "35%", marginLeft: "35%", marginTop: "2%" }}
        onSubmit={handleSubmit}
      >
        <div div className="d-flex flex-row mt-2">
          <MDBIcon fas icon="boxes fa-3x me-3" style={{ color: "#fa204c" }} />
          <span className="h1 fw-bold mb-0">Radion</span>
        </div>
        <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
          Create new Employee
        </h5>
        {/* <MDBInput id="employee-id" label="Employee-id"/> */}
        <MDBInput
          id="EmplyeeName"
          label="Employee-Name"
          wrapperClass="mb-4"
          value={employee.EmplyeeName}
          onChange={handleInputs}
        />
        <MDBInput
          id="EmplyeeEmail"
          label="Email"
          wrapperClass="mb-4"
          value={employee.EmplyeeEmail}
          onChange={handleInputs}
        />
        <MDBInput
          id="EmplyeePhone"
          label="Phone"
          wrapperClass="mb-4"
          value={employee.EmplyeePhone}
          onChange={handleInputs}
        />
        <MDBInput
          id="EmplyeePassword"
          label="Password"
          wrapperClass="mb-4"
          value={employee.EmplyeePassword}
          onChange={handleInputs}
        />
        <MDBBtn className="mb-4" color="dark" type="submit" block>
          Create Employee
        </MDBBtn>
      </form>
    </>
  );
};

export default AddEmployee;
