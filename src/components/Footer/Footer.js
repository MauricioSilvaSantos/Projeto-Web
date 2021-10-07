import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import Particles from 'react-particles-js';
import particlesFooter from '../../particlesFooter';

export default function Footer() {

  return (
    <>
      <Container className="d-flex align-items-end">
        <div className="footer-widget pb-100 w-100">
          <Row>
            <Col lg="4">
              <div className="footer-about mt-50" >
                <a className="logo-footer text-white" href="home">
                  <div>LOGO AQUI</div>
                </a>
              </div>
            </Col>
            <Col lg="5">
              <h4 className="text-white">Paginas ?</h4>
              <ListGroup variant="flush">
                <ListGroup.Item className="border-0 bg-transparent text-white" tag="a" href="#">Cras justo odio</ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent text-white" tag="a" href="#">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent text-white" tag="a" href="#">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent text-white" tag="a" href="#">Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent text-white" tag="a" href="#">Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg="3">
              <h4 className="text-white">Contatos</h4>
              <ListGroup variant="flush">
                <ListGroup.Item className="border-0 bg-transparent text-white" tag="a" href="#">Cras justo odio</ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent text-white" tag="a" href="#">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent text-white" tag="a" href="#">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent text-white" tag="a" href="#">Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent text-white" tag="a" href="#">Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <hr className="bg-white"/>
          <Row>
            <span className="text-white">Designer & Desenvolvimento by ???</span>
          </Row>
        </div>
      </Container>
      <Particles className="particles-2" params={particlesFooter}/>
    </>
  )
}