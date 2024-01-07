import React, { useState, useEffect } from "react";
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
  const [User, setUser] = useState();
  const [isModalOpen, setModalOpen] = useState(false);
  const getUserData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/users/getUser",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const user_data = await response.json();

      if (user_data && user_data.data) {
        const user = user_data.data;
        setUser(user);
        console.log(user_data);
      } else {
        console.error("User data is missing or malformed:", user_data);
        // Handle the error (e.g., show an error message to the user)
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle the error (e.g., show an error message to the user)
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  const handleAddMoney = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <h1>Hello, {User?.FirstName + " " + User?.LastName}</h1>
      <div style={{ padding: "20px", margin: "30px" }}>
        <h3>First name: {User?.FirstName}</h3>
        <h3>Last name: {User?.LastName}</h3>
        <h3>
          Dob: {User?.DOB ? new Date(User.DOB).toLocaleDateString() : "N/A"}
        </h3>
        <h3>Gender: {User?.Gender}</h3>
        <h3>Email: {User?.Email}</h3>
        <h3>Phone: {User?.Phone}</h3>
        <h3>Address: {User?.Address}</h3>

      </div>
      <table border={5} style={{ margin: "30px" }}>
        <tr style={{ padding: "10px", margin: "30px" }}>
          <td style={{ padding: "10px" }}>
            <h2>Radion Blance :</h2>
          </td>
          <td>
            {" "}
            <h4>{User.Blance}rs.</h4>
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
        <MDBCard
          isOpen={isModalOpen}
          toggle={handleModalClose}
          style={{ padding: "10px", width: "21%", marginLeft: "100px" }}
        >
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
