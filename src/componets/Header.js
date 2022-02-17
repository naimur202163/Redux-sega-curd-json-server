import { MDBContainer, MDBIcon, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit'
import React from 'react'

function Header() {
  return (
    <>

        <MDBNavbar expand="lg" light bgColor='primary'>
                <MDBContainer fluid>
                        <MDBNavbarBrand className='text-white'>
                            <span style={{marginRight:"15px"}}>
                                <MDBIcon fas icon='book-open'>
                                    Contact
                                </MDBIcon>
                            </span>
                        </MDBNavbarBrand>
                </MDBContainer>
        </MDBNavbar>

    </>
  )
}

export default Header