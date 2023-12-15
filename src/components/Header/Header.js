import React from "react";
import "../Header/Header.css";
import logoImg from "../../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar className="navbar_bg_color">
        <Container>
          <Navbar.Brand to="/home">
            <Link to="/">
              <Image src={logoImg} width="167.96px" height="87.91px" />
            </Link>
          </Navbar.Brand>
          <Nav className="my-auto">
            <Nav.Link>
              <Link to="/floor-plan">Floor Plan</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/favourites">Favourites</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
