import React from 'react'
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <div className='bg_second'>
                <Container>
                    <Row className='py-2'>
                        <Col lg={6} className='d-none d-lg-block'>
                            <div className="d-inline-flex align-items-center">
                                <a className="text-dark fs-6" href="">FAQs</a>
                                <span className="text-muted px-2">|</span>
                                <a className="text-dark fs-6" href="">Help</a>
                                <span className="text-muted px-2">|</span>
                                <a className="text-dark fs-6" href="">Support</a>
                            </div>
                        </Col>

                        <Col lg={6} className='text-center text-lg-right'>
                            <div className="d-inline-flex align-items-center">
                                <a className='text-dark px-2 fs-6' href> <FaFacebookF /> </a>
                                <a className='text-dark px-2 fs-6' href> <FaTwitter /> </a>
                                <a className='text-dark px-2 fs-6' href> <FaInstagram /> </a>
                                <a className='text-dark px-2 fs-6' href> <FaYoutube /> </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Header;