import React from "react";
import { Container, Navbar, Nav, InputGroup, Form, Button } from "react-bootstrap";
import './HeaderHome.css';

function HeaderHome (){
    return (
        <Navbar expand="md" className="bg-body-tertiary fixed-top">
            <Container>
                <Navbar className="d-flex" id="nav-home" collapseOnSelect>
                    <Navbar.Brand className="col-md-6">
                        <img className="logo-menu" src="/image/logo.jpg" alt="Logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="col-md-6">
                        <Nav className="me-auto">
                            <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                            <Nav.Link className="nav-link" href="/planos">Planos</Nav.Link>
                            <Nav.Link className="nav-link" href="/login">Login</Nav.Link>
                            <InputGroup>
                                <Form.Control placeholder="Pesquisar" aria-label="Pesquisar" aria-describedby="basic-addon2" />
                                <Button variant="outline-secondary" id="button-addon2">Pesq</Button>
                            </InputGroup>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>                                   
        </Navbar>
    )
}
export default HeaderHome;