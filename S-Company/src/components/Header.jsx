import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../CSS/Header.css';

function Header() {
  return (
    <Navbar 
      fixed="top" 
      collapseOnSelect 
      expand="md"
      className="header shadow-sm py-3"
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="header-brand d-flex align-items-center"
        >
          <img
            src="/logo.png"
            alt="Merchandising Logo"
            height="80"
            width="80"
            className="header-logo rounded-circle shadow"
          />
          <span className="header-title fs-3 fw-bold ms-3">
            MerchMasters
          </span>
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav"
          className="header-toggle border-0"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-4">
            {[  
              { to: "/", text: "Главная" },
              { to: "/partners", text: "Партнеры" },
              { to: "/about", text: "О нас" }  // ✅ Исправлено
              // { to: "/contacts", text: "Связаться" }
            ].map((item) => (
              <Nav.Link
                key={item.to}
                as={Link}
                to={item.to}
                className="header-nav-link position-relative px-3 py-2"
              >
                {item.text}
                <span className="header-nav-underline" />
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
