import React from "react";

import PropTypes from "prop-types";

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Progress,
} from "reactstrap";

function CardsHeader({ name, parentName }) {
  return (
    <>
      <div className="header pb-6">
        <Container fluid>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="6" xs="7">
                <h6 className="h2 d-inline-block mb-0">{name}</h6>{" "}
                <Breadcrumb
                  className="d-none d-md-inline-block ml-md-4"
                  listClassName="breadcrumb-links"
                >
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fas fa-home" />
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      {parentName}
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem aria-current="page" className="active">
                    {name}
                  </BreadcrumbItem>
                </Breadcrumb>
              </Col>
            </Row>

            <Row>
              <Col md="6" xl="3">
                <Card className="bg-gradient-primary border-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0 text-white"
                        >
                          Tasks completed
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0 text-white">
                          8/24
                        </span>
                        <Progress
                          className="progress-xs mt-3 mb-0"
                          max="100"
                          value="30"
                          color="success"
                        />
                      </div>
                      <Col className="col-auto">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            size="sm"
                            color="neutral"
                            className="mr-0"
                          >
                            <i className="fas fa-ellipsis-h" />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-sm">
                      <a
                        className="text-nowrap text-white font-weight-600"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        See details
                      </a>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" xl="3">
                <Card className="bg-gradient-info border-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0 text-white"
                        >
                          Contacts
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0 text-white">
                          123/267
                        </span>
                        <Progress
                          className="progress-xs mt-3 mb-0"
                          max="100"
                          value="50"
                          color="success"
                        />
                      </div>
                      <Col className="col-auto">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            size="sm"
                            color="neutral"
                            className="mr-0"
                          >
                            <i className="fas fa-ellipsis-h" />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-sm">
                      <a
                        className="text-nowrap text-white font-weight-600"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        See details
                      </a>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" xl="3">
                <Card className="bg-gradient-danger border-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0 text-white"
                        >
                          Items sold
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0 text-white">
                          200/300
                        </span>
                        <Progress
                          className="progress-xs mt-3 mb-0"
                          max="100"
                          value="80"
                          color="success"
                        />
                      </div>
                      <Col className="col-auto">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            size="sm"
                            color="neutral"
                            className="mr-0"
                          >
                            <i className="fas fa-ellipsis-h" />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-sm">
                      <a
                        className="text-nowrap text-white font-weight-600"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        See details
                      </a>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" xl="3">
                <Card className="bg-gradient-default border-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0 text-white"
                        >
                          Notifications
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0 text-white">
                          50/62
                        </span>
                        <Progress
                          className="progress-xs mt-3 mb-0"
                          max="100"
                          value="90"
                          color="success"
                        />
                      </div>
                      <Col className="col-auto">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            size="sm"
                            color="neutral"
                            className="mr-0"
                          >
                            <i className="fas fa-ellipsis-h" />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-sm">
                      <a
                        className="text-nowrap text-white font-weight-600"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        See details
                      </a>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

CardsHeader.propTypes = {
  name: PropTypes.string,
  parentName: PropTypes.string,
};

export default CardsHeader;
