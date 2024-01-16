import React, { useState } from "react";
import { MDBIcon, MDBInput, MDBBtn, MDBFile } from "mdb-react-ui-kit";
import {Alert} from "@mui/material"
const AddProduct = () => {
  const [Product, setProductData] = useState({
    product_title: "",
    product_img: "",
    product_discription: "",
    product_price: "",
    product_category: "",
    product_brand: "",
  });
  const [notification, setNotification] = useState(null);

  let id, value;
  const handleInputs = (e) => {
    console.log(e);
    id = e.target.id;
    value = e.target.value;
    setProductData({ ...Product, [id]: value });
  };
  const isEmpty = () => {
    for (const key in Product) {
      if (Product[key] === "") {
        return true;
      }
    }
    return false;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEmpty()) {
      setNotification("Please fill in all fields.");
      const emptyField = Object.keys(Product).find((key) => Product[key] === "");
      document.getElementById(emptyField)?.focus();
      return;
    }
    setNotification(null);

    // Create a FormData object to handle file uploads
    const formData = new FormData();

    // Append form data to FormData object
    Object.entries(Product).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Append file data to FormData object
    formData.append("product_img", e.target[1].files[0]); // Assuming the file input is the second element in the form

    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/users/addingProduct",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setNotification("Data uploded")
      } else {
        console.error("Failed to upload file:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <form
        style={{ marginRight: "35%", marginLeft: "35%", marginTop: "2%" }}
        onSubmit={handleSubmit}
      >
        {notification && <Alert severxity="error">{notification}</Alert>}
        <div div className="d-flex flex-row mt-2">
          <MDBIcon fas icon="boxes fa-3x me-3" style={{ color: "#fa204c" }} />
          <span className="h1 fw-bold mb-0">Radion</span>
        </div>
        <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
          Add Product
        </h5>
        {/* <MDBInput id="employee-id" label="Employee-id"/> */}
        <MDBInput
          id="product_title"
          label="Product Title"
          wrapperClass="mb-4"
          value={Product.product_title}
          onChange={handleInputs}
        />
        <p
          style={{
            color: "#808080",
            fontSize: "23px",
            padding: "2px",
            margin: "10px",
          }}
        >
          Product Image:
        </p>
        <MDBFile
          id="product_img"
          wrapperClass="mb-4"
          value={Product.product_img}
          onChange={handleInputs}
        />
        <br />
        <MDBInput
          id="product_discription"
          label="Product Discription"
          wrapperClass="mb-4"
          value={Product.product_discription}
          onChange={handleInputs}
        />
        <MDBInput
          id="product_price"
          label="Product Price"
          type="Number"
          wrapperClass="mb-4"
          value={Product.product_price}
          onChange={handleInputs}
        />
        <MDBInput
          id="product_category"
          label="Product Category"
          wrapperClass="mb-4"
          value={Product.product_category}
          onChange={handleInputs}
        />
        <MDBInput
          id="product_brand"
          label="Product Brand"
          wrapperClass="mb-4"
          value={Product.product_brand}
          onChange={handleInputs}
        />
        <MDBBtn className="mb-4" color="dark" type="submit" block>
          Add Product
        </MDBBtn>
      </form>
    </>
  );
};
export default AddProduct;
