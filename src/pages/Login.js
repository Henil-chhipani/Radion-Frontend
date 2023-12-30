import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBBtnGroup,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState({
    User: "Customer",
    Email: "",
    Password: "",
  });
  let id, value;
  const handleInputs = (e) => {
    console.log(e);
    id = e.target.id;
    value = e.target.value;
    setUser({ ...user, [id]: value });
  };
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/v1/users/login", {
        method: "POST",
        body: JSON.stringify(user),
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const responseData = await response.json();
      console.log("Login successful:", responseData);

      history("/");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol
            md="5 mx-auto img-container"
            style={{ marginLeft: "55%", marginTop: "10%" }}
          >
            <MDBCardImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR548dtG_xKCcpTw9CK4WqbTfBUpiUEzZNHoA&usqp=CAU"
              alt="login form"
              className="img-fluid shadow-4  image"
              style={{ marginLeft: "10%", width: "90%" }}
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="boxes fa-3x me-3"
                  style={{ color: "#fa204c" }}
                />
                <span className="h1 fw-bold mb-0">Radion</span>
              </div>
              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>
              <div>
                <MDBRadio
                  btnColor="#000"
                  id="User"
                  name="user"
                  wrapperTag="span"
                  label="Customer"
                  defaultChecked
                  value={"Customer"}
                  onChange={handleInputs}
                />
                <MDBRadio
                  btnColor="#000"
                  id="User"
                  name="user"
                  wrapperTag="span"
                  label="Sales executive"
                  value={"Sales Team"}
                  onChange={handleInputs}
                />
                <MDBRadio
                  btnColor="#000"
                  id="User"
                  name="user"
                  wrapperTag="span"
                  label="Admin"
                  value={"Admin"}
                  onChange={handleInputs}
                />
              </div>
              &nbsp;
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="Email"
                type="email"
                size="lg"
                value={user.Email}
                onChange={handleInputs}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="Password"
                type="password"
                size="lg"
                value={user.Password}
                onChange={handleInputs}
              />
              <MDBBtn
                className="mb-4 px-5"
                color="dark"
                size="lg"
                onClick={handleLogin}
              >
                Login
              </MDBBtn>
              <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <a href="/register" style={{ color: "#393f81" }}>
                  Register here
                </a>
              </p>
              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
