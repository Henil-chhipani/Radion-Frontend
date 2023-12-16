// ProductCard.js
import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const ProductCard = ({ product }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  const cardImageStyle = {
    height: "200px",
    objectFit: "cover",
  };

  return (
    <div className="product-card">
      <MDBCard style={{margin:'16px'}}>
        <MDBCardImage src={product.thumbnail} position="top" style={cardImageStyle} alt="..." />
        <MDBCardBody>
          <MDBCardTitle>{product.title}</MDBCardTitle>
          <MDBCardText>
            {expanded ? product.description : `${product.description.substring(0, 20)}...`}
            <br />
            <span onClick={toggleReadMore} style={{ cursor: "pointer", color: "blue" }}>
              {expanded ? "Read Less" : "Read More"}
            </span>
          </MDBCardText>
          <MDBBtn href="#" color='danger'>Buy ONLY {product.price} rs.</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default ProductCard;
