// ProductCard.js
import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBCardFooter,
  MDBModalDialog,
  MDBModalTitle,
  MDBModalContent,
} from "mdb-react-ui-kit";

const ProductCard = ({ product }) => {
  const [expanded, setExpanded] = useState(false);
  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  const cardImageStyle = {
    height: "200px",
    objectFit: "cover",
  };
  const orderPlacing = async () => {
    console.log();
    const ord = {
      product_id: product.product_id,
      num_Order: quantity,
    };
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/users/takeOrder",
        {
          method: "POST",
          body: JSON.stringify(ord),
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response:", response.status);

      if (!response.ok) {
        if (response.status === 409) {
          // Handle conflict error (if needed)
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Rest of your code to handle the response...
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const toggleOpen = () => setShowQuantityModal(!showQuantityModal);

  return (
    <>
      <div className="product-card">
        <MDBCard style={{ margin: "16px" }}>
          <MDBCardImage
            src={product.product_img}
            position="top"
            style={cardImageStyle}
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>{product.product_title}</MDBCardTitle>
            <MDBCardText>
              {expanded
                ? product.product_discription
                : `${product.product_discription.substring(0, 20)}...`}
              <br />
              <span
                onClick={toggleReadMore}
                style={{ cursor: "pointer", color: "blue" }}
              >
                {expanded ? "Read Less" : "Read More"}
              </span>
            </MDBCardText>
            <MDBBtn href="#" color="danger" onClick={toggleOpen}>
              Buy ONLY {product.product_price} rs.
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBModal
          open={showQuantityModal}
          setopen={setShowQuantityModal}
          tabIndex="-1"
        >
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>
                  Enter Quantity for "{product.product_title}"
                </MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleOpen}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <MDBInput
                  type="number"
                  label="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn
                  color="danger"
                  onClick={() => {
                    orderPlacing();
                    toggleOpen();
                  }}
                >
                  Place Order
                </MDBBtn>
                <MDBBtn color="secondary" onClick={toggleOpen}>
                  Cancel
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>

        {/* Quantity Input Modal */}
      </div>
    </>
  );
};

export default ProductCard;
