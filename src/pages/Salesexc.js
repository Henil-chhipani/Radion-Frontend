import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import {} from "@mui/material";
import ProductCard from "../components/ProductCard";

const Salesexc = () => {
  const [products, setProducts] = useState([]);
let Header_id="Salesexc";
  useEffect(() => {
    // Fetch product data from the API
    fetch("http://localhost:3001/api/v1/users/getProducts")
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  return (
    <>
      <Header id={Header_id}/>

      <MDBContainer style={{ maxWidth: "2000px" }}>
        <MDBRow>
          <MDBCol size="md-3">
            <MDBCard style={{ margin: "16px" }}>
              {/* <MDBCardImage bgcolor="gre" position="top" alt="..." />
               */}
              <p
                style={{
                  backgroundColor: "grey",
                  width: "97%",
                  padding: "10px",
                  margin: "5px",
                  borderRadius: "10px",
                  position: "relative",
                  textAlign: "center",
                }}
              >
                <br />
                <br />
                add photo
                <br />
                <br />
                <br />
                <br />
              </p>
              <MDBCardBody>
                <MDBCardTitle>New product</MDBCardTitle>
                <MDBCardText>add new product</MDBCardText>
                <MDBBtn href="/addProduct" color="">
                  Add product
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <h2> Product list: </h2>
        <MDBRow>
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <MDBCol size="md-3">
                <ProductCard key={product.product_id} product={product} />
              </MDBCol>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </MDBRow>
      </MDBContainer>

      <Footer />
    </>
  );
};

export default Salesexc;
