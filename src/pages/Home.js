import React, { useState } from "react";
import { MDBCarousel, MDBCarouselItem, MDBNavbar } from "mdb-react-ui-kit";
import ProductList from "./ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Home = () => {  

  return (
    <>
      <Header />
      <MDBCarousel showControls showIndicators touch={false}>
        <MDBCarouselItem itemId={1}>
          <img
            src="https://mdbootstrap.com/img/new/slides/041.jpg"
            className="d-block"
            alt="..."
            style={{ width: "100%", height: "300px" }}
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img
            src="https://mdbootstrap.com/img/new/slides/042.jpg"
            className="d-block"
            alt="..."
            style={{ width: "100%", height: "300px" }}
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img
            src="https://mdbootstrap.com/img/new/slides/043.jpg"
            className="d-block"
            alt="..."
            style={{ width: "100%", height: "300px" }}
          />
        </MDBCarouselItem>
      </MDBCarousel>
      <ProductList />
      <Footer />
    </>
  );
};

export default Home;
