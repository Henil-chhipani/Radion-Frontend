import React from "react";
import {} from "@mui/material";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBRadio,
  MDBBadge,
} from "mdb-react-ui-kit";
const AddEmployee = () => {
  return (
    <>
      <form style={{ marginRight: "35%", marginLeft: "35%", marginTop: "2%" }}>
        <div div className="d-flex flex-row mt-2">
          <MDBIcon fas icon="boxes fa-3x me-3" style={{ color: "#fa204c" }} />
          <span className="h1 fw-bold mb-0">Radion</span>
        </div>
        <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
          Create new Employee
        </h5>
        {/* <MDBInput id="employee-id" label="Employee-id"/> */}
        <MDBInput
          id="employee-Name"
          label="Employee-Name"
          wrapperClass="mb-4"
        />
        <MDBInput id="Email" label="Email" wrapperClass="mb-4" />
        <MDBInput id="Phone" label="Phone" wrapperClass="mb-4" />
        <MDBBtn className="mb-4" color="dark" type="submit" block>
          Create Employee
        </MDBBtn>
      </form>
    </>
  );
};

export default AddEmployee;
