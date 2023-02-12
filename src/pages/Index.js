
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

const Index = (props) => {
  const { keycloak } = useKeycloak();

  return (
    <>
      <Header />

      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            {keycloak?.hasResourceRole("manager") && (
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Performance
                      </h6>
                      <h2 className="mb-0">Total orders</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}

                  <div className="chart">
                    <Bar data={chartExample2.data} />
                  </div>
                </CardBody>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
