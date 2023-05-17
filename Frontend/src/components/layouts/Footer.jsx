import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Navbar_Footer.css'

const Footer = () => {
  return (
    <footer>
      <Container fluid className='containerFooter'>
        <Row>
          <Col md="4">
            <h5>Contacto</h5>
            <p>093******22</p>
            <p>fitnest@gmail.com</p>

          </Col>
          <Col md="4">
            <h5>Enlaces útiles</h5>
            <ul>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Preguntas frecuentes</a></li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Síguenos en las redes sociales</h5>
            <ul>
              <li><a href="#">Facebook</a><i className='bx bxl-facebook-square'></i></li>
              <li><a href="#">github</a><i className='bx bxl-github' ></i></li>
              <li><a href="#">Instagram</a><i className='bx bxl-instagram' ></i></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;