import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Col, CardHeader, Button } from "reactstrap";

import HeaderNoInfo from "../../components/header/HeaderNoInfo";
import List from "./List";
const Ocorrencias = (props) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();

  return (
    <>
      <HeaderNoInfo />

      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader className="border-0">
                {keycloak?.hasResourceRole("manager") && (
                  <Button
                    color="success"
                    className="btn mb-2 "
                    onClick={() => navigate("/admin/ocorrencias/new")}
                  >
                    <i className="ni ni-folder-17"></i> Adicionar
                    Nova Ocorrência
                  </Button>
                )}
                <List />
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Ocorrencias;
