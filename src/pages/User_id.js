import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBInput,
} from "mdb-react-ui-kit";

const User_id = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleAddMoney = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <h1>Hello, user name</h1>
      <div style={{ padding: "20px", margin: "30px" }}>
        <h3>First name: </h3>
        <h3>Last name: </h3>
        <h3>Dob: </h3>
        <h3>Gender: </h3>
        <h3>Email: </h3>
        <h3>Phone: </h3>
        <h3>Address: </h3>
      </div>
      <table border={5} style={{ margin: "30px" }}>
        <tr style={{ padding: "10px", margin: "30px" }}>
          <td style={{ padding: "10px" }}>
            <h2>Radion Blance :</h2>
          </td>
          <td>
            {" "}
            <h4>30rs.</h4>
          </td>
          <td>
            <MDBBtn onClick={handleAddMoney} style={{ marginLeft: "40px" }}>
              Add Money
            </MDBBtn>
          </td>
          <td>
            <MDBBtn style={{ marginLeft: "40px" }}>Withdraw Money</MDBBtn>
          </td>
        </tr>
      </table>

      {isModalOpen && (
        <MDBCard isOpen={isModalOpen} toggle={handleModalClose} style={{padding:'10px',width:'21%',marginLeft:'100px'}}>
          <MDBCardHeader toggle={handleModalClose}>Add Money</MDBCardHeader>
          <MDBCardBody>
            <MDBInput type="number" label="Enter amount" />
            <MDBBtn color="primary" onClick={handleModalClose}>
              Add
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      )}
      <Footer />
    </>
  );
};
export default User_id;
