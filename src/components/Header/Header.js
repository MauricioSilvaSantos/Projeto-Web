import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Particles from 'react-particles-js';
import configParticles from '../../configParticles';
import TextHeader from '../Footer/TextHeader/TextHeader';
import img1 from '../../assets/carousel/img1.png';
import img2 from '../../assets/carousel/img2.png';
import img3 from '../../assets/carousel/img3.png';
import img4 from '../../assets/carousel/img4.png';
import img5 from '../../assets/carousel/img5.png';

export default function Header() {

  return (
    <>
      <div className="header-hero bg-cover" id="home">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <div className="header-hero-content">
                <TextHeader/>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col className="carousel-center" lg="12">
              <Carousel fade>
                <Carousel.Item>
                  <img className="d-block w-100" src={img1} alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={img2} alt="..."/>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={img3} alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={img4} alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={img5} alt="..." />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
        <Particles className="particles-1" params={configParticles} />
      </div>
    </>
  );
}