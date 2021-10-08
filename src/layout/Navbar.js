import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button, Row, Col } from 'react-bootstrap';

const MenuSuperior = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState('');
  // const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.onscroll = () => {
      if(window.pageYOffset > 1){
        setScrolled(' sticky');
      } else {
        setScrolled('');
      }
    };
  }, []);

  return (
    <>
      <div className={`navbar-area${scrolled}`}>
        <Container>
          <Row>
            <Col lg="12">
              <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand >LOGO AQ</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="w-100 justify-content-center">
                    <Nav.Link href="#">Início</Nav.Link>
                    <Nav.Link href="#">Recursos</Nav.Link>
                    <Nav.Link href="#">Pagina 3</Nav.Link>
                    <Nav.Link href="#">Pagina 4</Nav.Link>
                    <Nav.Link href="#">Pagina 5</Nav.Link>
                    <Nav.Link href="#">Pagina 6</Nav.Link>
                  </Nav>
                  <Nav>
                    <Button variant="warning">Login</Button>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
        {/* <Container>
          <Row>
            <Col lg="12">
              <Navbar light expand="lg">
                <NavbarBrand>LOGO AQUI</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="ms-auto" id="nav" navbar>
                    <NavItem>
                      <NavLink>Início</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>Página 2</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>Página 3</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>Página 4</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>Página 5</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>Página 6</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
                <div className="navbar-btn d-none d-sm-inline-block">
                  <Button color="primary" block>Teste Button</Button>
                </div>
              </Navbar>
            </Col>
          </Row>
        </Container> */}
      </div>
    </>
  );
}

export default MenuSuperior;