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
          <Col>
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
        </Row>
      </Container>
     
    </>
  );
};

export default EditCadastroOcorrencia;
