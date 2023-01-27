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
              <Col md="4">
                <FormGroup>
                  <Label for="grupoParticipante"><i class="fa-solid fa-store"></i> Nome Unidade</Label>
                  <Input id="grupoParticipante" name="grupoParticipante" type="text" />
                </FormGroup>
              </Col>
              

              <Col md="5">
              <FormGroup>
                  <Label for="sucursal"><i className="fa-solid fa-shop"></i> Endereço</Label>
                  <Input id="sucursal" name="sucursal" type="text" />
                </FormGroup>
              </Col>

              <Col md="2">
              <FormGroup>
                  <Label for="diretoria"><i className="fa-solid fa-location-dot"></i> UF</Label>
                  <Input id="diretoria" name="diretoria" type="text" />
                </FormGroup>
              </Col>

              <Col md="5">
                <FormGroup>
                  <Label for="sucursal"><i className="fa-solid fa-user-tie"></i> Responsável</Label>
                  <Input id="sucursal" name="sucursal" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <hr/>
            <Button className="btn btn-success mb-2 w-25"><i className="fa-solid fa-check"></i> Salvar Alteração</Button>
            <Button className="btn btn-primary mb-2 "><i className="fa-solid fa-xmark"></i> Cancelar</Button>
          </Form>
            </CardHeader>
            </Card>
          </Col>
        </Row>
       
      </Container>
     
    </>
  );
};

export default EditCadastroOcorrencia;
