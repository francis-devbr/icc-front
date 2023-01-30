import { useState } from "react";

import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Forms = (props) => {
  const [loja, setLoja] = useState({
    id: null,
    nome: "",
  });

  return (
    <>
      <Form role="form">
        <Row>
          <Col md="4">
            <FormGroup>
              <Label for="grupoParticipante">
                <i class="fa-solid fa-store"></i> Nome Unidade
              </Label>
              <Input
                id="grupoParticipante"
                name="grupoParticipante"
                type="text"
              />
            </FormGroup>
          </Col>

          <Col md="5">
            <FormGroup>
              <Label for="sucursal">
                <i className="fa-solid fa-shop"></i> Endereço
              </Label>
              <Input id="sucursal" name="sucursal" type="text" />
            </FormGroup>
          </Col>

          <Col md="2">
            <FormGroup>
              <Label for="diretoria">
                <i className="fa-solid fa-location-dot"></i> UF
              </Label>
              <Input id="diretoria" name="diretoria" type="text" />
            </FormGroup>
          </Col>

          <Col md="5">
            <FormGroup>
              <Label for="sucursal">
                <i className="fa-solid fa-user-tie"></i> Responsável
              </Label>
              <Input id="sucursal" name="sucursal" type="text" />
            </FormGroup>
          </Col>
        </Row>
        <hr />

        {props.acao === "view" ? (
          <Button
            className="btn btn-success mb-2 w-25"
            onClick={(e) => e.preventDefault()}
          >
            <i className="fa-solid fa-check"></i> Editar
          </Button>
        ) : (
          <>
            <Button
              className="btn btn-success mb-2 w-25"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa-solid fa-check"></i> Salvar Alteração
            </Button>
          </>
        )}
      </Form>
    </>
  );
};

export default Forms;
