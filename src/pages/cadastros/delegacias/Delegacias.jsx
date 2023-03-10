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

const Delegacias = () => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();

  return (
    <>
      <SimpleHeader />
      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader className="border-0">
                {keycloak?.hasResourceRole("manager") && (
                  <Button
                    color="success"
                    className="btn mb-2 "
                    onClick={() => navigate("/admin/delegacias/new")}
                  >
                    <i className="fas fa-user-secret"></i> Adicionar Nova
                    Delegacia
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

export default Delegacias;
