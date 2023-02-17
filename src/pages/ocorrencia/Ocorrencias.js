import SimpleHeader from "components/header/SimpleHeader";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  Button,
  CardBody,
} from "reactstrap";

import List from "./List";
const Ocorrencias = () => {
  const navigate = useNavigate();


  return (
    <>
      <SimpleHeader name="Ocorrencias" parentName="Ocorrencia" />

      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card className="shadow" style={{ minHeight: "550px" }}>
            <CardHeader>
                <Row className="align-items-center">
                  <Col className="text-left" xs="12">
                    <Button
                      className="btn-neutral"
                      color="default"
                      onClick={() =>
                        navigate("/admin/ocorrencias/new")
                      }
                    >
                      <i className="ni ni-folder-17"></i> Adicionar
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

export default Ocorrencias;
