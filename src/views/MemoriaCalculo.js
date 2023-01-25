import { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  CardBody,
  Form,
  CardFooter,
  FormGroup,
  Input,
  Button,
  Table,
  Label,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import HeaderNoInfo from "../components/header/HeaderNoInfo";
const MemoriaCalculo = (props) => {
  const [state, setState] = useState({
    tabs: 1,
  });

  const toggleNavs = (e, state, index) => {
    e.preventDefault();
    setState({
      [state]: index,
    });
  };
  return (
    <>
      <HeaderNoInfo />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Form role="form">
                  <Row>
                    <Col md="2">
                      <FormGroup>
                        <Label for="anomesref">
                          Ano/Mes ref.
                        </Label>
                        <Input
                          id="anomesref"
                          name="anomesref"
                          type="text"
                        />
                      </FormGroup>
                    </Col>

                    <Col>
                      <FormGroup>
                        <Label for="grupoParticipante">Grupo Participante</Label>
                        <Input id="grupoParticipante" name="grupoParticipante" type="text" />
                      </FormGroup>
                    </Col>

                   
                  </Row>

                  <Row>
                    <Col md="6">
                    <FormGroup>
                        <Label for="diretoria">Diretoria</Label>
                        <Input id="diretoria" name="diretoria" type="text" />
                      </FormGroup>
                    </Col>

                    <Col md="4">
                    <FormGroup>
                        <Label for="sucursal">Sucursal</Label>
                        <Input id="sucursal" name="sucursal" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="2">
                      <FormGroup>
                        <Label for="categoria">Categoria</Label>
                        <Input
                          id="categoria"
                          name="categoria"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardHeader>
              <CardBody>
                <div className="nav-wrapper">
                  <Nav
                    className="nav-fill flex-column flex-md-row"
                    id="tabs-icons-text"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        aria-selected={state.tabs === 1}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: state.tabs === 1,
                        })}
                        onClick={(e) => toggleNavs(e, "tabs", 1)}
                        href="#pablo"
                        role="tab"
                      >
                        <i className="ni ni-cloud-upload-96 mr-2" />
                        Producao Ultimos 12 Meses
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        aria-selected={state.tabs === 2}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: state.tabs === 2,
                        })}
                        onClick={(e) => toggleNavs(e, "tabs", 2)}
                        href="#pablo"
                        role="tab"
                      >
                        <i className="ni ni-bell-55 mr-2" />
                        Pontos Basicos
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        aria-selected={state.tabs === 3}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: state.tabs === 3,
                        })}
                        onClick={(e) => toggleNavs(e, "tabs", 3)}
                        href="#pablo"
                        role="tab"
                      >
                        <i className="ni ni-calendar-grid-58 mr-2" />
                        Pontuacao
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        aria-selected={state.tabs === 4}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: state.tabs === 4,
                        })}
                        onClick={(e) => toggleNavs(e, "tabs", 4)}
                        href="#pablo"
                        role="tab"
                      >
                        <i className="ni ni-calendar-grid-58 mr-2" />
                        Classe por Regiao
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        aria-selected={state.tabs === 5}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: state.tabs === 5,
                        })}
                        onClick={(e) => toggleNavs(e, "tabs", 5)}
                        href="#pablo"
                        role="tab"
                      >
                        <i className="ni ni-calendar-grid-58 mr-2" />
                        Indices
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <Card className="shadow">
                  <CardBody>
                    <TabContent activeTab={"tabs" + state.tabs}>
                      <TabPane tabId="tabs1">
                        <Table
                          className="align-items-center table-flush"
                          responsive
                        >
                          <thead className="thead-light">
                            <tr>
                              <th scope="col">Cia</th>
                              <th scope="col">Corretor</th>

                              <th scope="col">Lideranca</th>
                              <th scope="col">Sucursal</th>
                              <th scope="col">Diretoria</th>
                              <th scope="col">Producao</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                            </tr>
                          </tbody>
                        </Table>

                        <Table
                          className="align-items-center table-flush"
                          responsive
                        >
                          <thead className="thead-light">
                            <tr>
                              <th scope="col"></th>
                              <th scope="col">Classe</th>

                              <th scope="col">Diretoria</th>
                              <th scope="col">Superintendencia</th>
                              <th scope="col">Sucursal</th>
                              <th scope="col">Valor Limite Producao</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tabs2">
                        <Table
                          className="align-items-center table-flush"
                          responsive
                        >
                          <thead className="thead-light">
                            <tr>
                              <th scope="col">Grupo Familia</th>
                              <th scope="col">Valor Producao</th>

                              <th scope="col">Ponto Basico</th>
                              <th scope="col">Fator conv</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tabs3">
                        <Table
                          className="align-items-center table-flush"
                          responsive
                        >
                          <thead className="thead-light">
                            <tr>
                              <th scope="col">Grupo</th>
                              <th scope="col">Basico</th>

                              <th scope="col">%</th>
                              <th scope="col">Sinistralidade</th>
                              <th scope="col">%</th>
                              <th scope="col">Renovacao</th>
                              <th scope="col">Categoria</th>
                              <th scope="col">Extras</th>
                              <th scope="col">Manuais</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>

                      <TabPane tabId="tabs4">
                        <Table
                          className="align-items-center table-flush"
                          responsive
                        >
                          <thead className="thead-light">
                            <tr>
                              <th scope="col">Regiao</th>
                              <th scope="col">Verde - VE</th>

                              <th scope="col">VE - Indireto</th>
                              <th scope="col">Bronze - BR</th>
                              <th scope="col">Prata - PR</th>
                              <th scope="col">Ouro - OU</th>
                              <th scope="col">Diamante - DI</th>

                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>

                      <TabPane tabId="tabs5">
                        <p className="description">fff</p>

                        <Table
                          className="align-items-center table-flush"
                          responsive
                        >
                          <thead className="thead-light">
                            <tr>
                              <th scope="col">Grupo de Familia</th>
                              <th scope="col">Grupo</th>
                              <th scope="col">Apolices Renovadas</th>
                              <th scope="col">Apolices Vencidas</th>
                              <th scope="col">Indice Renovacao</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </CardBody>
              <CardFooter className="py-4">
                <Col md="4">
                  <Row>
                    <Col md="4">
                      <Button color="success" type="button">
                        <i className="fas fa-file-alt"></i> Relatorio
                      </Button>
                    </Col>
                    <Col md="4">
                      <Button color="success" type="button">
                        <i className="fas fa-theater-masks" /> Parceiro
                      </Button>
                    </Col>

                    <Col md="4">
                      <Button color="success" type="button">
                        <i className="far fa-handshake"></i> Produto
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default MemoriaCalculo;
