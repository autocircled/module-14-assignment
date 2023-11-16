import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

function AppNavBar() {
    const expand = 'md'

    useEffect(() => {
        const body = document.body;
        window.onscroll = function () {
            if (document.documentElement.scrollTop > 0) {
                body.classList.add("scrolled");
            } else {
                body.classList.remove("scrolled");
            }
        };

        return () => {
            window.onscroll = null;
        };
    }, [])
    return (
        <>
            <Navbar expand={expand} id="main-navbar" className="main bg-body-transparent mb-3 fixed-top">
                <Container>
                    <Navbar.Brand href="#">AutoCircled</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                AutoCircled
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 gap-4">
                                <NavLink to='/' className='nav-link'>Home</NavLink>
                                <NavLink to='/team' className='nav-link'>Team</NavLink>
                                <NavLink to='/service' className='nav-link'>Service</NavLink>
                                <NavLink to='/project' className='nav-link'>Project</NavLink>
                                <NavLink to='/testimonials' className='nav-link'>Testimonials</NavLink>
                                <NavLink to='/login' className='btn btn-outline-success'>Login</NavLink>
                                <NavLink to='/register' className='btn btn-success'>Register</NavLink>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default AppNavBar;