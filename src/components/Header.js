import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBCollapse,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { useAuth } from "../utils/Auth";
import { User_id } from "../pages/customer/User_id.js";
const Header = ({ id }) => {
  const { isAuthenticated, userFirstName, login, logout } = useAuth();
  const [openBasic, setOpenBasic] = useState(false);

  const myImage = require("../Assets/media/img1.png").default;
  let Header_id = id;
  // admin Header code----------------------------------------------------------------------
  if (Header_id == "Admin") {
    return (
      <>
        <MDBNavbar expand="lg" light bgColor="white" fixed>
          <MDBContainer fluid>
            <MDBNavbarBrand href="/admin">
              <MDBIcon fas icon="boxes fa me-2" style={{ color: "#fa204c" }} />
              Radion Admin pannel
            </MDBNavbarBrand>

            <MDBNavbarToggler
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpenBasic(!openBasic)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>

            <MDBCollapse navbar open={openBasic}>
              <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current="page" href="/Salesteam">
                    Product Mangement
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/SalesAnalysis">
                    Sales anlysis data
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle
                      tag="a"
                      className="nav-link"
                      role="button"
                    >
                      Dropdown
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem link>Action</MDBDropdownItem>
                      <MDBDropdownItem link>Another action</MDBDropdownItem>
                      <MDBDropdownItem link>
                        Something else here
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
              </MDBNavbarNav>

              <MDBBtn
                color="light"
                className=" p-1"
                style={{
                  fontSize: "10px",
                  width: "200px",
                  backgroundColor: "#fa204c",
                  color: "white",
                }}
              >
                Henil Chhipani
              </MDBBtn>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </>
    );
  }
  // Sales employee site Header ------------------------------------------------------------
  if (Header_id == "Salesexc") {
    return (
      <MDBNavbar expand="lg" light bgColor="white" fixed>
        <MDBContainer fluid>
          <MDBNavbarBrand href="/salesteam">
            <MDBIcon fas icon="boxes fa me-2" style={{ color: "#fa204c" }} />
            Radion Sales pannel
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="/salesteam">
                  Product Mangement
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/salesAnalysis">
                  Sales anlysis data
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Dropdown
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <MDBBtn
              color="light"
              className=" p-1"
              style={{
                fontSize: "10px",
                width: "200px",
                backgroundColor: "#fa204c",
                color: "white",
              }}
            >
              Henil Chhipani
            </MDBBtn>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
  // customer site Header----------------------------------------------------------------
  return (
    <MDBNavbar expand="lg" light bgColor="white" fixed>
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <MDBIcon fas icon="boxes fa me-2" style={{ color: "#fa204c" }} />
          Radion
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Find Product</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Categories
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

          {isAuthenticated ? (
            <MDBBtn
              style={{ fontSize: "14px", marginRight: "5px", width: "150px" }}
              href="/user"
            >
              Hello, {userFirstName}
            </MDBBtn>
          ) : (
            <MDBBtn
              color="light"
              className=" p-1"
              style={{
                fontSize: "10px",
                width: "200px",
                backgroundColor: "#fa204c",
                color: "white",
              }}
              href="/login"
            >
              Signup/Login
            </MDBBtn>
          )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
