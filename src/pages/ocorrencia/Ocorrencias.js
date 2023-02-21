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
                  <Col>
                    <h3 className="mb-0">Lista de Ocorrencias</h3>
                  </Col>

                  <Col className="text-right">
                    <Button
                      className="btn-icon btn-neutral"
                      color="default"
                      onClick={() => navigate("/admin/ocorrencias/new")}
                    >
                      <span className="btn-inner--icon">
                        <i class="ni ni-fat-add"></i>
                      </span>
                      <span className="btn-inner--text">NOVO REGISTRO</span>
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
