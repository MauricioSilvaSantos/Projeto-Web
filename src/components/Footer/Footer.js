import React from 'react';
import Particles from 'react-particles-js';
import { Col, Container, ListGroup, ListGroupItem, Row, 
  // CardImg
} from 'reactstrap';
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
                  {/* <CardImg></CardImg> */}
                  <div>LOGO AQUI</div>
                </a>
              </div>
            </Col>
            <Col lg="5">
              <h4 className="text-white">Paginas ?</h4>
              <ListGroup flush>
                <ListGroupItem className="border-0 bg-transparent text-white" tag="a" href="#">Cras justo odio</ListGroupItem>
                <ListGroupItem className="border-0 bg-transparent text-white" tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem className="border-0 bg-transparent text-white" tag="a" href="#">Morbi leo risus</ListGroupItem>
                <ListGroupItem className="border-0 bg-transparent text-white" tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem className="border-0 bg-transparent text-white" tag="a" href="#">Vestibulum at eros</ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg="3">
              <h4 className="text-white">Contatos</h4>
              <ListGroup flush>
                <ListGroupItem className="border-0 bg-transparent text-white" tag="a" href="#">Cras justo odio</ListGroupItem>
                <ListGroupItem className="border-0 bg-transparent text-white" tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem className="border-0 bg-transparent text-white" tag="a" href="#">Morbi leo risus</ListGroupItem>
                <ListGroupItem className="border-0 bg-transparent text-white" tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem className="border-0 bg-transparent text-white" tag="a" href="#">Vestibulum at eros</ListGroupItem>
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