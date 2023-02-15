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

import { useNavigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import SimpleHeader from "components/header/SimpleHeader";

const Lojas = (props) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();

  return (
    <>
      <SimpleHeader name="Lojas" parentName="Cadastro Geral" />
      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader className="border-0">
                {keycloak?.hasResourceRole("manager") && (
                  <Button
                    color="success"
                    className="btn mb-2 "
                    onClick={() => navigate("/admin/lojas/new")}
                  >
                    <i className="fa-solid fa-store"></i> Adicionar Nova Loja
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
