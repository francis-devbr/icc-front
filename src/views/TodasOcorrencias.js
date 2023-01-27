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
  InputGroupText

} from "reactstrap";
import classnames from "classnames";
import HeaderNoInfo from "../components/header/HeaderNoInfo";
const TodasOcorrencias = (props) => {
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
            <Button className="btn btn-success mb-2 " onClick={toggle}><i className="fa-solid fa-file-circle-plus"></i> Adicionar Nova Ocorrência</Button>
            <Table className="align-items-center" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">Profissional</th>
                  <th scope="col">UF</th>
                  <th scope="col">Loja</th>
                  <th scope="col">Responsável</th>
                  <th className="text-center" scope="col">STATUS</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Weberson  Designer</td>
                  <td> SP </td>
                  <td>CRFSAOPAULO3</td>
                  <td>Almir Peixoto Madureira</td>
                  <td className="text-center">
                    <Badge color="success" className="badge-dot px-2 text-white">
                      Concluido
                    </Badge>
                  </td>
                  <td>
                    <i className="fa-solid fa-eye text-dark icones-acao"></i>
                    <i className="fa-solid fa-pen-to-square text-primary icones-acao"></i>
                    <i className="fa-solid fa-trash-can text-danger icones-acao"></i>
                  </td>
                </tr>

                <tr>
                  <th scope="row">1</th>
                  <td>Almir Peixoto Madureira</td>
                  <td> SP </td>
                  <td>CRFSAOPAULO3</td>
                  <td>Weberson Designer</td>
                  <td className="text-center">
                    <Badge color="warning" className="badge-dot px-2 text-white">
                      Em Análise
                    </Badge>
                  </td>
                  <td>
                    <i className="fa-solid fa-eye text-dark icones-acao"></i>
                    <i className="fa-solid fa-pen-to-square text-primary icones-acao"></i>
                    <i className="fa-solid fa-trash-can text-danger icones-acao"></i>
                  </td>
                </tr>
              </tbody>
            </Table>
            </CardHeader>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal isOpen={modal} size={'lg'} toggle={toggle} >
        <ModalHeader className="bg-success " toggle={toggle}><p className="text-white mb-0"> <b><i className="fa-solid fa-file-circle-plus"></i> Adicionar Nova Ocorrência</b></p></ModalHeader>
         <ModalBody>
          <Form role="form">
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label for="grupoParticipante"><i className="fa-solid fa-id-card-clip"></i> Profissional</Label>
                  <Input id="grupoParticipante" name="grupoParticipante" type="text" />
                </FormGroup>
              </Col>
              <Col md="2">
              <FormGroup>
                  <Label for="diretoria"><i className="fa-solid fa-location-dot"></i> UF</Label>
                  <Input id="diretoria" name="diretoria" type="text" />
                </FormGroup>
              </Col>

              <Col md="3">
              <FormGroup>
                  <Label for="sucursal"><i className="fa-solid fa-shop"></i> Loja</Label>
                  <Input id="sucursal" name="sucursal" type="text" />
                </FormGroup>
              </Col>

              <Col md="3">
                <FormGroup>
                  <Label for="categoria"><i className="fa-solid fa-tags"></i> Categoria</Label>
                  <Input
                    id="categoria"
                    name="categoria"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md="5">
                <FormGroup>
                  <Label for="sucursal"><i className="fa-solid fa-user-tie"></i> Responsável</Label>
                  <Input id="sucursal" name="sucursal" type="text" />
                </FormGroup>
              </Col>
              <Col md="4">
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
              <Col md="3">
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
        </ModalBody>
        <ModalFooter>
          <Button color="success" className="w-25" onClick={toggle}>
            <i className="fa-solid fa-plus"></i> Adicionar
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            <i className="fa-solid fa-xmark"></i> Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default TodasOcorrencias;
