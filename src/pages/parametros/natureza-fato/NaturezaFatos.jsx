import { useKeycloak } from "@react-keycloak/web";
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
import HeaderNoInfo from "../../../components/header/HeaderNoInfo";
import List from "./List";

const NaturezaFatos = () => {
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
                    color="primary"
                    className="btn mb-2 "
                    onClick={() => navigate("/admin/naturezas/new")}
                  >
                    <i className="fa-solid fa-file-circle-plus"></i> Adicionar
                    Novo Natureza
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

export default NaturezaFatos;
