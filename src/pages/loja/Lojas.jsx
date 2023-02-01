import {
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  Button,
  CardBody,
} from "reactstrap";
import HeaderNoInfo from "../../components/header/HeaderNoInfo";
import List from "./List";

import { useNavigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

const Lojas = (props) => {
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
                    className="btn btn-success mb-2 "
                    onClick={() => navigate("/admin/lojas/new")}
                  >
                    <i className="fa-solid fa-file-circle-plus"></i> Adicionar
                    Nova Loja
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

export default Lojas;
