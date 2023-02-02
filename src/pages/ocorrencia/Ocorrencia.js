import { useState } from "react";
import { Card, Container, Row, Col, CardHeader, CardBody } from "reactstrap";
import HeaderNoInfo from "../../components/header/HeaderNoInfo";
import Forms from "./form/Form";

const Ocorrencia = (props) => {
  return (
    <>
      <HeaderNoInfo />
      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader className="border-0"></CardHeader>
              <CardBody>
                <Forms />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Ocorrencia;
