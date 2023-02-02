import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";

const Forms = (props) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  return (
    <>
      <Form role="form">
        <Row>
          <Col md="1">
            <FormGroup>
              <Label for="diretoria">
                <i class="fa-solid fa-hashtag"></i> ID
              </Label>
              <Input id="diretoria" name="diretoria" value="1" type="text" />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label for="grupoParticipante">
                <i className="fa-solid fa-id-card-clip"></i> Profissional
              </Label>
              <Input
                id="grupoParticipante"
                name="grupoParticipante"
                value="Weberson Designer"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md="1">
            <FormGroup>
              <Label for="diretoria">
                <i className="fa-solid fa-location-dot"></i> UF
              </Label>
              <Input id="diretoria" name="diretoria" value="SP" type="text" />
            </FormGroup>
          </Col>

          <Col md="2">
            <FormGroup>
              <Label for="sucursal">
                <i className="fa-solid fa-shop"></i> Loja
              </Label>
              <Input
                id="sucursal"
                name="sucursal"
                value="CRFSAOPAULO3"
                type="text"
              />
            </FormGroup>
          </Col>

          <Col md="2">
            <FormGroup>
              <Label for="categoria">
                <i className="fa-solid fa-tags"></i> Categoria
              </Label>
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
              <Label for="sucursal">
                <i className="fa-solid fa-user-tie"></i> Responsável
              </Label>
              <Input
                id="sucursal"
                name="sucursal"
                value="Almir Peixoto Madureira"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label for="sucursal">
                <i className="fa-solid fa-bell"></i> Status
              </Label>
              <Input id="exampleSelect" name="sucursal" type="select">
                <option>Em Análise</option>
                <option>Concluido</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label for="sucursal">
                <i className="fa-solid fa-money-check-dollar"></i> Valor
              </Label>
              <InputGroup>
                <InputGroupText>R$</InputGroupText>
                <Input type="number" placeholder="00,00" />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <FormGroup row>
              <Label for="exampleFile">
                <i class="fa-regular fa-file-pdf"></i> Inserir Arquivos
              </Label>
              <Input id="exampleFile" name="file" type="file" />
            </FormGroup>
          </Col>
        </Row>
        <hr />
        {props.acao === "view" ? (
          keycloak?.hasResourceRole("manager") && (
            <Button
              color="primary"
              className="btn  mb-2 w-25"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/admin/lojas/${1}/edit`);
              }}
            >
              <i className="fa-solid fa-check"></i> Editar
            </Button>
          )
        ) : (
          <>
            <Button
              color="primary"
              className="btn mb-2 w-25"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa-solid fa-check"></i> Salvar
            </Button>
          </>
        )}

        <Button
          className="btn  btn-danger mb-2 w-25"
          onClick={(e) => {
            e.preventDefault();
            navigate("/admin/ocorrencias");
          }}
        >
          <i className="fa-solid fa-check"></i> Cancelar
        </Button>
      </Form>
    </>
  );
};

export default Forms;
