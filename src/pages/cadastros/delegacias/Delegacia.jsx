import SimpleHeader from "components/header/SimpleHeader";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Forms from "./form/Form";

const Delegacia = () => {
  const params = useParams();

  return (
    <>
      <SimpleHeader />

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

export default Delegacia;
