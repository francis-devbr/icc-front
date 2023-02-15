import { useKeycloak } from "@react-keycloak/web";
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
const Ocorrencias = (props) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();

  return (
    <>
      <SimpleHeader name="Ocorrencias" parentName="Ocorrencia" />

      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card className="shadow" style={{ minHeight: "550px" }}>
              <CardHeader className="border-0">
                {keycloak?.hasResourceRole("manager") && (
                  <Button
                    color="success"
                    className="btn mb-2 "
                    onClick={() => navigate("/admin/ocorrencias/new")}
                  >
                    <i className="ni ni-folder-17"></i> Adicionar Nova
                    Ocorrência
                  </Button>
                )}
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
