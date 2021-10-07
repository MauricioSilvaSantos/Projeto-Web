import React, { useEffect, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Button } from 'reactstrap';

const MenuSuperior = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState('');
  const toggle = () => setIsOpen(!isOpen);

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
        </Container>
      </div>
    </>
  );
}

export default MenuSuperior;