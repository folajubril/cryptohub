import Link from 'next/link';
import React, { useState } from 'react';
import ScrollspyNav from "react-scrollspy-nav";

import {
    Col, Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Row
} from 'reactstrap';
// import {} from 'react-router-dom'

const HeaderLanding = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="header dashboard">
            <Container>
                <Row>
                    <Col>
                        <Navbar light expand="lg" className="p-0">
                            <NavbarBrand to="/landing">
                                <img className="img-fluid" src="/images/w_logo.png" alt="" />
                                <span>Tradient</span>
                            </NavbarBrand>
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <ScrollspyNav
                                    scrollTargetIds={["intro", "market", "portfolio", "testimonial", "contact"]}
                                    offset={100}
                                    activeNavClass="is-active"
                                    scrollDuration="1000"
                                    headerBackground="true"
                                >
                                    <ul className='navbar-nav'>
                                        <li className='nav-item'><a className='nav-link' href="#intro">Home</a></li>
                                        <li className='nav-item'><a className='nav-link' href="#market">Market</a></li>
                                        <li className='nav-item'><a className='nav-link' href="#portfolio">Portfolio</a></li>
                                        <li className='nav-item'><a className='nav-link' href="#testimonial">Testimonial</a></li>
                                        <li className='nav-item'><a className='nav-link' href="#contact">Contact</a></li>
                                    </ul>
                                </ScrollspyNav>
                                

                            </Collapse>

                            <div className="dashboard_log my-2">
                                <div className="d-flex align-items-center">
                                    <div class="header_auth">
                                        <a href="./signin" class="btn btn-success">Sign In</a>
                                        <a href="./signup" class="btn btn-outline-primary">Sign Up</a>
                                    </div>
                                </div>
                            </div>

                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderLanding;