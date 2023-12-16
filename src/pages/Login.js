import React from "react";
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
  const history = useNavigate();
  const handleLogin = () => {
    // Perform your login logic here
    // For now, let's assume the login is successful
    // and redirect to the home page
    history("/");
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
                  btn
                  btnColor="#000"
                  id="btn-radio"
                  name="options"
                  wrapperTag="span"
                  label="Customer"
                  defaultChecked
                />
                <MDBRadio
                  btn
                  btnColor="#000"
                  id="btn-radio2"
                  name="options"
                  wrapperClass="mx-4"
                  wrapperTag="span"
                  label="Sales executive"
                />
              </div>
              &nbsp;
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
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
