import { useKeycloak } from "@react-keycloak/web";
import SimpleHeader from "components/header/SimpleHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import List from "./List";

const NaturezaFatos = () => {
  const navigate = useNavigate();

  return (
    <>
      <SimpleHeader name="Naturezas" parentName="Cadastro Geral" />
      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader>
                <Row className="align-items-center">
                  <Col className="text-left" xs="12">
                    <Button
                      className="btn-neutral"
                      color="default"
                      onClick={() => navigate("/admin/naturezas/new")}
                    >
                      <i className="ni ni-book-bookmark"></i> Adicionar
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <List />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NaturezaFatos;
