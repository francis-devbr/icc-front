import React from "react";

import classnames from "classnames";

import PropTypes from "prop-types";

import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useKeycloak } from "@react-keycloak/web";

function AdminNavbar({ theme, sidenavOpen, toggleSidenav }) {
 const { keycloak } = useKeycloak();
  return (
    <>
      <Navbar
        className={classnames(
          "navbar-top navbar-expand border-bottom",
          { "navbar-dark bg-gradient-icc": theme === "dark" },
          { "navbar-light bg-secondary": theme === "light" }
        )}
      >
        <Container fluid>
          <Collapse navbar isOpen={true}>
            <Nav className="align-items-center ml-md-auto" navbar>
              <NavItem className="d-xl-none">
                <div
                  className={classnames(
                    "pr- sidenav-toggler",
                    { active: sidenavOpen },
                    { "sidenav-toggler-dark": theme === "dark" }
                  )}
                  onClick={toggleSidenav}
                >
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line" />
                    <i className="sidenav-toggler-line" />
                    <i className="sidenav-toggler-line" />
                  </div>
                </div>
              </NavItem>

              <UncontrolledDropdown nav>
                <DropdownToggle className="nav-link" color="" tag="a">
                  <i className="ni ni-bell-55" />
                </DropdownToggle>
                <DropdownMenu
                  className="dropdown-menu-xl py-0 overflow-hidden"
                  right
                >
                  <div className="px-3 py-3">
                    <h6 className="text-sm text-muted m-0">
                      You have <strong className="text-info">13</strong>{" "}
                      notifications.
                    </h6>
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle className="nav-link" color="" tag="a">
                  <i className="ni ni-ungroup" />
                </DropdownToggle>
                <DropdownMenu
                  className="dropdown-menu-lg dropdown-menu-dark bg-default"
                  right
                >
                  <Row className="shortcuts px-4">
                    <Col
                      className="shortcut-item"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-red">
                        <i className="ni ni-calendar-grid-58" />
                      </span>
                      <small>Calendar</small>
                    </Col>
                    <Col
                      className="shortcut-item"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-orange">
                        <i className="ni ni-email-83" />
                      </span>
                      <small>Email</small>
                    </Col>
                    <Col
                      className="shortcut-item"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-info">
                        <i className="ni ni-credit-card" />
                      </span>
                      <small>Payments</small>
                    </Col>
                    <Col
                      className="shortcut-item"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-green">
                        <i className="ni ni-books" />
                      </span>
                      <small>Reports</small>
                    </Col>
                    <Col
                      className="shortcut-item"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-purple">
                        <i className="ni ni-pin-3" />
                      </span>
                      <small>Maps</small>
                    </Col>
                    <Col
                      className="shortcut-item"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      xs="4"
                      tag="a"
                    >
                      <span className="shortcut-media avatar rounded-circle bg-gradient-yellow">
                        <i className="ni ni-basket" />
                      </span>
                      <small>Shop</small>
                    </Col>
                  </Row>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav className="align-items-center ml-auto ml-md-0" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="nav-link pr-0" color="" tag="a">
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="..."
                        src={require("assets/img/theme/avatar-7.png")}
                      />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                        {keycloak.tokenParsed.preferred_username}
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      keycloak.logout();
                    }}
                  >
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

AdminNavbar.defaultProps = {
  toggleSidenav: () => {},
  sidenavOpen: false,
  theme: "dark",
};
AdminNavbar.propTypes = {
  toggleSidenav: PropTypes.func,
  sidenavOpen: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"]),
};

export default AdminNavbar;
