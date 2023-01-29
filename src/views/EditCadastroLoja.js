import { useState } from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";
import {
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
} from "reactstrap";
import HeaderNoInfo from "../components/header/HeaderNoInfo";
const EditCadastroLoja = (props) => {
  const params = useParams();

  console.log(params);

  return (
    <>
      <HeaderNoInfo />

      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader className="border-0">
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

                  {params.acao === "view" ? (
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

                      <Button
                        className="btn btn-primary mb-2 "
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa-solid fa-xmark"></i> Cancelar
                      </Button>
                    </>
                  )}
                </Form>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditCadastroLoja;
