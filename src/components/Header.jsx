import { Container, Nav, Navbar, Button, Offcanvas } from 'react-bootstrap';
import { useState, useEffect } from "react";

const Header = () => {
    const [show, setShow] = useState(false);
    const [darkMode, setDarkMode] = useState(true); 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme");
        } else {
            document.body.classList.add("light-theme");
            document.body.classList.remove("dark-theme");
        }
    }, [darkMode]);

    return (
        <Navbar expand="lg" fixed="top" className="navbar-main">
            <Container fluid className="d-flex align-items-center justify-content-between fixed-top bg">

                <Navbar href="#home" className="logo">
                    Manisha<span>.dev</span>
                </Navbar>

                <Nav className="d-none d-lg-flex nav-center gap-4">
                    <Nav.Link href="#home" className="nav-custom">Home</Nav.Link>
                    <Nav.Link href="#about" className="nav-custom">About</Nav.Link>
                    <Nav.Link href="#skill" className="nav-custom">Skills</Nav.Link>
                    <Nav.Link href="#project" className="nav-custom">Projects</Nav.Link>
                    <Nav.Link href="#education" className="nav-custom">Education</Nav.Link>
                    <Nav.Link href="#certificates" className="nav-custom">Certificates</Nav.Link>
                    <Nav.Link href="#service" className="nav-custom">Services</Nav.Link>
                    <Nav.Link href="#contact" className="nav-custom">Contact</Nav.Link>
                </Nav>

                <div className="d-none d-lg-flex align-items-center gap-3">
                    

                    
                    <Button className="theme" onClick={() => setDarkMode(!darkMode)}>
                        <i className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-fill"}`}></i>
                    </Button>
                </div>

                <Navbar.Toggle
                    aria-controls="offcanvasNavbar"
                    className="d-lg-none custom-toggle"
                    onClick={handleShow}/>

                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    show={show}
                    onHide={handleClose}
                    placement="end"
                    className="custom-side-menu d-lg-none">
                    <button
                        className="custom-close d-lg-none"
                        onClick={handleClose}>
                        ✕
                    </button>

                    <Offcanvas.Body className="d-flex flex-column justify-content-center align-items-center">

                        <Nav className="flex-column align-items-center gap-4 mb-3">
                            <Nav.Link href="#home" className="nav-custom">Home</Nav.Link>
                            <Nav.Link href="#about" className="nav-custom">About</Nav.Link>
                            <Nav.Link href="#skill" className="nav-custom">Skills</Nav.Link>
                            <Nav.Link href="#project" className="nav-custom">Projects</Nav.Link>
                            <Nav.Link href="#service" className="nav-custom">Services</Nav.Link>
                            <Nav.Link href="#contact" className="nav-custom">Contact</Nav.Link>
                        </Nav>

                        <div className="d-flex gap-3">
                            <Button className="theme" onClick={() => setDarkMode(!darkMode)}>
                                <i className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-fill"}`}></i>
                            </Button>
                        </div>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Container>
        </Navbar>
    );
};

export default Header;