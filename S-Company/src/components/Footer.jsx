import '../CSS/Footer.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer shadow-sm py-4 w-100">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="footer-title fw-bold">Контакты</h5>
            <p className="footer-text mb-0">Мы всегда на связи!</p>
          </Col>
          
          <Col md={4} className="mb-3 mb-md-0">
            <p className="footer-text mb-1">
              <strong>Email:</strong> info@merchmasters.com
            </p>
            <p className="footer-text mb-1">
              <strong>Адрес офиса:</strong> г. Москва, ул. Примерная, д. 10, офис 5
            </p>
            <p className="footer-text mb-1">
              <strong>Телефон начальника:</strong> +7 (999) 123-45-67
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
