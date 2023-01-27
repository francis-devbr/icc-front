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
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupText,
  FormText

} from "reactstrap";
import classnames from "classnames";
import HeaderNoInfo from "../components/header/HeaderNoInfo";
const EditCadastroOcorrencia = (props) => {
  const [state, setState] = useState({
    tabs: 1,
  });

  const toggleNavs = (e, state, index) => {
    e.preventDefault();
    setState({
      [state]: index,
    });
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal)

  return (
    <>
      <HeaderNoInfo />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <Col>
          <Card className="shadow">
            <CardHeader className="border-0">
                <Form role="form">
                    <Row>
                        <Col md="1">
                        <FormGroup>
                            <Label for="diretoria"><i class="fa-solid fa-hashtag"></i> ID</Label>
                            <Input id="diretoria" name="diretoria" value="1" type="text" />
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                            <Label for="grupoParticipante"><i className="fa-solid fa-id-card-clip"></i> Profissional</Label>
                            <Input id="grupoParticipante" name="grupoParticipante" value="Weberson Designer" type="text" />
                            </FormGroup>
                        </Col>
                        <Col md="1">
                        <FormGroup>
                            <Label for="diretoria"><i className="fa-solid fa-location-dot"></i> UF</Label>
                            <Input id="diretoria" name="diretoria" value="SP" type="text" />
                            </FormGroup>
                        </Col>

                        <Col md="2">
                        <FormGroup>
                            <Label for="sucursal"><i className="fa-solid fa-shop"></i> Loja</Label>
                            <Input id="sucursal" name="sucursal" value="CRFSAOPAULO3" type="text" />
                            </FormGroup>
                        </Col>

                        <Col md="2">
                            <FormGroup>
                            <Label for="categoria"><i className="fa-solid fa-tags"></i> Categoria</Label>
                            <Input
                                id="categoria"
                                name="categoria"
                                type="text"
                                value="Fraude"
                            />
                            </FormGroup>
                        </Col>
                        <Col md="5">
                            <FormGroup>
                            <Label for="sucursal"><i className="fa-solid fa-user-tie"></i> Responsável</Label>
                            <Input id="sucursal" name="sucursal" value="Almir Peixoto Madureira" type="text" />
                            </FormGroup>
                        </Col>
                        <Col md="2">
                            <FormGroup>
                                <Label for="sucursal"><i className="fa-solid fa-bell"></i> Status</Label>
                                <Input id="exampleSelect" name="sucursal" type="select">
                                <option>
                                    Em Análise
                                </option>
                                <option>
                                    Concluido
                                </option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md="2">
                        <FormGroup>
                            <Label for="sucursal"><i className="fa-solid fa-money-check-dollar"></i> Valor</Label>
                            <InputGroup>
                                <InputGroupText>
                                R$
                                </InputGroupText>
                                <Input type="number" placeholder="00,00" />
                            </InputGroup>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </CardHeader>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <CardHeader className="border-0">
              <FormGroup row>
                <Row>
                  <Col sm={6}>
                  <Label for="exampleFile" >
                    <i class="fa-regular fa-file-pdf"></i> Inserir Arquivos
                  </Label>
                  <Input id="exampleFile" name="file" type="file"/>
                  <FormText>
                      
                  </FormText>
                  </Col>
                  </Row>
              </FormGroup>
            </CardHeader>
          </Col>
          <Col md={12}>
          <div className="col">
            <Card className="shadow">
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
                        Video
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
                        PDF's
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
                        Imagens
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
            </Card>
          </div>
          </Col>
        </Row>
      </Container>
     
    </>
  );
};

export default EditCadastroOcorrencia;
