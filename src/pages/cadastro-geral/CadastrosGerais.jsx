import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import HeaderNoInfo from "../../components/header/HeaderNoInfo";

const CadastrosGerais = () => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();

  return (
    <>
      <HeaderNoInfo />
      <Container className="mt--7" fluid>
        <Row>
          <Col lg="9">
            <Card className="shadow">
              <CardHeader className="border-0">
                {keycloak?.hasResourceRole("manager") && (
                  <Row>
                    <Col lg="6" xl="4">
                      <Card className="card-stats mb-4 mb-xl-0" >
                        <CardBody>
                          <Row>
                            <div className="col">
                              <CardTitle
                                tag="h5"
                                className="text-uppercase text-muted mb-0"
                              >
                                Lojas
                              </CardTitle>
                              <span className="h2 font-weight-bold mb-0">
                                121
                              </span>
                            </div>
                            <Col className="col-auto">
                              <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                <i className="fa-solid fa-store" />
                              </div>
                            </Col>
                          </Row>
                          <Button
                            color="primary"
                            className="btn mb-2 w-100 mt-2"
                            onClick={() => navigate("/admin/lojas")}
                          >
                            <i className="fa-solid fa-eye"></i> Visualizar
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg="6" xl="4">
                      <Card className="card-stats mb-4 mb-xl-0">
                        <CardBody>
                          <Row>
                            <div className="col">
                              <CardTitle
                                tag="h5"
                                className="text-uppercase text-muted mb-0"
                              >
                                Formato Loja
                              </CardTitle>
                              <span className="h2 font-weight-bold mb-0">
                                5
                              </span>
                            </div>
                            <Col className="col-auto">
                              <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                <i className="fas fa-store-slash" />
                              </div>
                            </Col>
                          </Row>
                          <Button
                            color="primary"
                            className="btn mb-2 w-100 mt-2"
                            onClick={() => navigate("/admin/formatos")}
                          >
                            <i className="fa-solid fa-eye"></i> Visualizar
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg="6" xl="4">
                      <Card className="card-stats mb-4 mb-xl-0">
                        <CardBody>
                          <Row>
                            <div className="col">
                              <CardTitle
                                tag="h5"
                                className="text-uppercase text-muted mb-0"
                              >
                                Natureza Fato
                              </CardTitle>
                              <span className="h2 font-weight-bold mb-0">
                                3
                              </span>
                            </div>
                            <Col className="col-auto">
                              <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                <i className="ni ni-book-bookmark" />
                              </div>
                            </Col>
                          </Row>
                          <Button
                            color="primary"
                            className="btn mb-2 w-100 mt-2"
                            onClick={() => navigate("/admin/naturezas")}
                          >
                            <i className="fa-solid fa-eye"></i> Visualizar
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg="6" xl="4" className="mt-3">
                      <Card className="card-stats mb-4 mb-xl-0">
                        <CardBody>
                          <Row>
                            <div className="col">
                              <CardTitle
                                tag="h5"
                                className="text-uppercase text-muted mb-0"
                              >
                                Pessoas
                              </CardTitle>
                              <span className="h2 font-weight-bold mb-0">
                                354
                              </span>
                            </div>
                            <Col className="col-auto">
                              <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                <i className="ni ni-circle-08" />
                              </div>
                            </Col>
                          </Row>
                          <Button
                            color="primary"
                            className="btn mb-2 w-100 mt-2"
                            onClick={() => navigate("/admin/pessoas")}
                          >
                            <i className="fa-solid fa-eye"></i> Visualizar
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6" xl="4" className="mt-3">
                      <Card className="card-stats mb-4 mb-xl-0">
                        <CardBody>
                          <Row>
                            <div className="col">
                              <CardTitle
                                tag="h5"
                                className="text-uppercase text-muted mb-0"
                              >
                                Delegacias
                              </CardTitle>
                              <span className="h2 font-weight-bold mb-0">
                                113
                              </span>
                            </div>
                            <Col className="col-auto">
                              <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <i class="fas fa-user-secret"></i>
                              </div>
                            </Col>
                          </Row>
                          <Button
                            color="primary"
                            className="btn mb-2 w-100 mt-2"
                            onClick={() => navigate("/admin/delegacias")}
                          >
                            <i className="fa-solid fa-eye"></i> Visualizar
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                )}
              </CardHeader>
              <CardBody>{/* <List /> */}</CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CadastrosGerais;
