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
const TodasLojas = (props) => {
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
            <Button className="btn btn-success mb-2 " onClick={toggle}><i className="fa-solid fa-file-circle-plus"></i> Adicionar Nova Loja</Button>
            <Table className="align-items-center" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">Nome Unidade</th>
                  <th scope="col">Codigo</th>
                  <th scope="col">Endereço</th>
                  <th scope="col">UF</th>
                  <th scope="col">Responsável</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Carrefour Hiper Vila Maria</td>
                  <td> CRFSAOPAULO3 </td>
                  <td>Avenida Morvan Dias de Figueiredo, 3177</td>
                  <td> SP </td>
                  <td>Almir Peixoto Madureira</td>
                 
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
      <Modal isOpen={modal} size={'md'} toggle={toggle} >
        <ModalHeader className="bg-success " toggle={toggle}><p className="text-white mb-0"> <b><i class="fa-solid fa-store"></i> Adicionar Nova Loja</b></p></ModalHeader>
         <ModalBody>
          <Form role="form">
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="grupoParticipante"><i class="fa-solid fa-store"></i> Nome Unidade</Label>
                  <Input id="grupoParticipante" name="grupoParticipante" type="text" />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="sucursal"><i className="fa-solid fa-user-tie"></i> Responsável</Label>
                  <Input id="sucursal" name="sucursal" type="text" />
                </FormGroup>
              </Col>
              

              <Col md="8">
              <FormGroup>
                  <Label for="sucursal"><i className="fa-solid fa-shop"></i> Endereço</Label>
                  <Input id="sucursal" name="sucursal" type="text" />
                </FormGroup>
              </Col>

              <Col md="4">
              <FormGroup>
                  <Label for="diretoria"><i className="fa-solid fa-location-dot"></i> UF</Label>
                  <Input id="diretoria" name="diretoria" type="text" />
                </FormGroup>
              </Col>

              
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
            <Container>
                <Row>
                    <Col md={6}>
                        <Button color="success" className="w-100" onClick={toggle}>
                            <i className="fa-solid fa-plus"></i> Adicionar Loja
                        </Button>
                    </Col>
                    <Col md={6}>
                    <Button color="secondary" className="w-100" onClick={toggle}>
                        <i className="fa-solid fa-xmark"></i> Cancelar
                    </Button>
                    </Col>
                </Row>
            </Container>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default TodasLojas;
