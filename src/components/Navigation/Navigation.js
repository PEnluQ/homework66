import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={RouterNavLink} to="/">Quotes Central</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/">Quotes</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/quotes/new">Submit new quote</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        </div>
    );
};

export default Navigation;