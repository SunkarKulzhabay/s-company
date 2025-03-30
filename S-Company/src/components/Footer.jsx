import '../CSS/Footer.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



function Footer() {
  return (
    <footer className="footer shadow">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="footer-title fw-bold">Контакты</h5>
            <p className="footer-text mb-0">Мы всегда на связи!</p>
          </Col>
          
          <Col md={4} className="mb-3 mb-md-0">
            <p className="footer-text mb-1">
              <strong>Email:</strong> sunkardimon@gmail.com
            </p>
            <p className="footer-text mb-1">
              <strong>Адрес офиса:</strong> <a href='https://2gis.kz/almaty/geo/9430047375060169/76.884226,43.237675'>проспекте Абая, 150, угол улицы Тургута Озала, в Бостандыкском районе Алматы.</a>
            </p>
            <p className="footer-text mb-1">
              <strong>Телефон начальника:</strong> +7 747 821 74861
            </p>
          </Col>
          
          <Col md={4} className="text-md-end">
            <p className="footer-text mb-0">
              © {new Date().getFullYear()} MerchMasters. Все права защищены.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
