import {
    MDBCollapse,
    MDBContainer,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler
} from "mdb-react-ui-kit";
import React, { useState } from "react";

function Header() {
    const [showBasic,setShowBasic]=useState(false)
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="primary">
        <MDBContainer fluid>
          <MDBNavbarBrand className="text-white">
            <span style={{ marginRight: "15px" }}>
              <MDBIcon fas icon="book-open">
                Contact
              </MDBIcon>
            </span>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            data-target="navbar"
            aria-controls="navbar
               "
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="text-white"
            onClick={()=>setShowBasic(!showBasic)}
          >
                <MDBIcon fas icon="bars"/>
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
                <MDBNavbarNav
                    className="mr-auto mb-2 mb-lg-0"
                ></MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Header;
