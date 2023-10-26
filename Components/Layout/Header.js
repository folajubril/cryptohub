import Link from 'next/link';
import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';

// import logo from '../../images/w_logo.png';

// import {} from 'react-router-dom'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="header dashboard">
            <Container>
                <Row>
                    <Col>
                        <Navbar light expand="lg" className="p-0">
                            <NavbarBrand to="/">
                                <img className="img-fluid" src="images/w_logo.png" alt="" />
                            </NavbarBrand>
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <Link className='nav-link' href='/' exact>Home</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className='nav-link' href='/buysell'>Buy Sell</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className='nav-link' href='/accounts'>Accounts</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className='nav-link' href='/settings'>Settings</Link>
                                    </NavItem>
                                </Nav>

                            </Collapse>

                            <div className="dashboard_log my-2">
                                <div className="d-flex align-items-center">
                                    <div className="account_money">
                                        <ul>
                                            <li className="crypto">
                                                <span>0.0025</span>
                                                <i className="cc BTC-alt"></i>
                                            </li>
                                            <li className="usd">
                                                <span>19.93 USD</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <UncontrolledDropdown nav inNavbar className="profile_log ">
                                        <DropdownToggle nav className="user">
                                            <span className="thumb"><i className="la la-user"></i></span>
                                            <span className="name">Maria Pascle</span>
                                            <span className="arrow"><i className="la la-angle-down"></i></span>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <Link className='dropdown-item' href="/accounts">
                                                <i className="la la-user"></i> Account
                                            </Link>
                                            <Link className='dropdown-item' href="/history">
                                                <i className="la la-book"></i> History
                                            </Link>
                                            <Link className='dropdown-item' href="/settings">
                                                <i className="la la-cog"></i> Setting
                                            </Link>
                                            <Link className='dropdown-item' href="/lock">
                                                <i className="la la-lock"></i> Lock
                                            </Link>
                                            <Link className='dropdown-item' href="/signin">
                                                <i className="la la-sign-out"></i> Logout
                                            </Link>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                </div>
                            </div>

                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;