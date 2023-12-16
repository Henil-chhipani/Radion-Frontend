// ProductList.js
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the API
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  return (
    <div className="product-list">
      <MDBContainer style={{maxWidth:'2000px'}}>
        <MDBRow>
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <MDBCol size="md-3">
                <ProductCard key={product.id} product={product} />
              </MDBCol>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ProductList;
