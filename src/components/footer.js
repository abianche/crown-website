import React from "react"
import { Container, Navbar, Row } from "react-bootstrap"

const Footer = () => (
  <Navbar
    className="justify-content-center"
    bg="light"
    variant="light"
    fixed="bottom"
  >
    <Container className="align-items-center">
      <Row>
        <Navbar.Text>
          The Crown Foundation © {new Date().getFullYear()}
        </Navbar.Text>
      </Row>
    </Container>
  </Navbar>
)

export default Footer
