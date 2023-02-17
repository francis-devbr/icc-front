import { useKeycloak } from "@react-keycloak/web";
import SimpleHeader from "components/header/SimpleHeader";
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

const OcorrenciasInternas = () => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();

  return (
    <>
      <SimpleHeader name="Ocorrencias" parentName="Ocorrencia Interna" />
      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card className="shadow" style={{ minHeight: "550px" }}>
            <CardHeader className="border-0">
                <Button
                  className="btn-neutral"
                  color="default"
                  onClick={() => navigate("/admin/ocorrencias-internas/new")}
                >
                  <i className="ni ni-folder-17"></i> Adicionar
                </Button>
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

export default OcorrenciasInternas;
