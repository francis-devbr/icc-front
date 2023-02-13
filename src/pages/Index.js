
// react plugin used to create charts
import { Bar } from "react-chartjs-2";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
import {
  chartExample2,
} from "../app/charts";
import Header from "../components/header/Header";
import { useKeycloak } from "@react-keycloak/web";
import HeaderOcorrencias from "../components/header/HeaderOcorrencias";

const Index = (props) => {
  const { keycloak } = useKeycloak();

  return (
    <>
      <HeaderOcorrencias />

      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-6 mb-xl-0" xl="6">
            {keycloak?.hasResourceRole("manager") && (
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Ocorrencias
                      </h6>
                      <h2 className="mb-0">Total</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>{/* Chart */}</CardBody>
              </Card>
            )}
          </Col>

          <Col className="mb-6 mb-xl-0" xl="6">
            {keycloak?.hasResourceRole("manager") && (
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Ocorrencias Internas
                      </h6>
                      <h2 className="mb-0">Total</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>{/* Chart */}</CardBody>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
