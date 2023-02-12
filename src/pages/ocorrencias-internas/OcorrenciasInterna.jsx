import { useParams } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import HeaderNoInfo from "../../components/header/HeaderNoInfo";
import Forms from "./form/Form";

const OcorrenciasInterna = () => {
  const params = useParams();

  return (
    <>
      <HeaderNoInfo />

      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader className="border-0"></CardHeader>
              <CardBody>
                <Forms acao={params.acao} id={params.id} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OcorrenciasInterna;
