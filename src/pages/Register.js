import React, { useEffect, useState } from "react";

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
import { DateField } from "@mui/x-date-pickers/DateField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Alert from "@mui/material/Alert";

const Ragister = () => {
  const [user, setUser] = useState({
    FirstName: "",
    LastName: "",
    DOB: "",
    Gender: "",
    Email: "",
    Phone: "",
    Address: "",
    Password: "",
    RePassword: "",
  });
  let id, value;
  const [notification, setNotification] = useState(null);

  const handleInputs = (e) => {
    console.log(e);
    id = e.target.id;
    value = e.target.value;
    setUser({ ...user, [id]: value });
  };

  const isEmpty = () => {
    for (const key in user) {
      if (user[key] === "") {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEmpty()) {
      setNotification("Please fill in all fields.");
      const emptyField = Object.keys(user).find((key) => user[key] === "");
      document.getElementById(emptyField)?.focus();
      return;
    }
    setNotification(null);

    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.text();
    console.log(data);
  };

  const getUser = async () => {
    const response = await fetch("http://localhost:3001/register", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <form
        style={{ marginRight: "35%", marginLeft: "35%", marginTop: "2%" }}
        onSubmit={handleSubmit}
      >
        {" "}
        {notification && <Alert severity="error">{notification}</Alert>}
        <div div className="d-flex flex-row mt-2">
          <MDBIcon fas icon="boxes fa-3x me-3" style={{ color: "#fa204c" }} />
          <span className="h1 fw-bold mb-0">Radion</span>
        </div>
        <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
          Create new account
        </h5>
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput
              id="FirstName"
              label="First name"
              name="FirstName"
              size="lg"
              value={user.FirstName}
              onChange={handleInputs}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="LastName"
              label="Last name"
              size="lg"
              value={user.LastName}
              onChange={handleInputs}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol md="7">
            <MDBInput
              type="date"
              size="lg"
              id="DOB"
              label="Date of Birth"
              value={user.DOB}
              onChange={handleInputs}
              style={{ padding: "5px" }}
            />
          </MDBCol>
          <MDBCol md="2">
            <MDBRadio
              id="Gender"
              name="gender"
              label="Male"
              style={{borderColor:"black",borderRadius:"3px"}}
              value={"Male"}
              onChange={handleInputs}
            />
          </MDBCol>
          <MDBCol md="2">
            <MDBRadio
              id="Gender"
              name="gender"
              label="Female"
              style={{borderColor:"black",borderRadius:"3px"}}
              value={"Female"}
              onChange={handleInputs}
            />
          </MDBCol>
        </MDBRow>
        <MDBInput
          wrapperClass="mb-4"
          type="email"
          id="Email"
          label="Email"
          size="lg"
          value={user.Email}
          onChange={handleInputs}
        />
        <MDBInput
          wrapperClass="mb-4"
          type="tel"
          id="Phone"
          label="Phone"
          size="lg"
          value={user.Phone}
          onChange={handleInputs}
        />
        <MDBInput
          wrapperClass="mb-4"
          id="Address"
          label="Address"
          size="lg"
          value={user.Address}
          onChange={handleInputs}
        />
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="Password"
              type="password"
              size="lg"
              value={user.Password}
              onChange={handleInputs}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              wrapperClass="mb-4"
              label="Re-Password"
              id="RePassword"
              type="password"
              size="lg"
              value={user.RePassword}
              onChange={handleInputs}
            />
          </MDBCol>
        </MDBRow>
        <MDBBtn className="mb-4" color="dark" type="submit" block>
          Create account
        </MDBBtn>
      </form>
    </>
  );
};
export default Ragister;
