import { Nav } from 'react-bootstrap';
import '../assets/css/footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="footer bg-black text-white py-5 small">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-4 my-md-0">
                        <div className="footer-logo">
                            <span className='fw-bold display-6'>AutoCircled</span>
                        </div>
                        <div className="footer-description fst-italic my-4">
                            <p>Autocircled is a creative agency. We love clean, modern, minimal designs and simple code.</p>
                        </div>
                        <div className="social-links d-flex align-items-center gap-4">
                            <Link to="/" className='d-flex align-items-center justify-content-center text-white'><FaFacebookF /></Link>
                            <Link to="/" className='d-flex align-items-center justify-content-center text-white'><FaTwitter /></Link>
                            <Link to="/" className='d-flex align-items-center justify-content-center text-white'><FaLinkedinIn /></Link>
                            <Link to="/" className='d-flex align-items-center justify-content-center text-white'><RiInstagramFill /></Link>
                        </div>
                    </div>
                    <div className="col-md-4 quick-links my-4 my-md-0">
                        <h3 className='widget-title'>Quick Links</h3>
                        <Nav className="flex-column mt-4">
                            <Nav.Link as={Link} className='px-0 py-0 mb-3 text-white' to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} className='px-0 py-0 mb-3 text-white' to="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link as={Link} className='px-0 py-0 mb-3 text-white' to="/about">About Us</Nav.Link>
                            <Nav.Link as={Link} className='px-0 py-0 mb-3 text-white' to="/contact">Contact Us</Nav.Link>
                        </Nav>
                    </div>
                    <div className="col-md-4 address my-4 my-md-0">
                        <h3 className='widget-title'>Contact Info</h3>
                        <ul className="contact-info px-0 my-4">
                            <li className="d-flex align-items-center mb-3">
                                <HiBuildingOffice2 className='me-2' />
                                <span>123 Street, New York, USA</span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                                <MdEmail className='me-2' />
                                <span>5KQpV@example.com</span>
                            </li>
                            <li className="d-flex align-items-center mb-3">
                                <FaPhoneSquareAlt className='me-2' />
                                <span>+012 345 67890</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row copyright mt-5">
                    <div className="col-md-6">
                        <p className="mb-0">© 2023 AutoCircled. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
