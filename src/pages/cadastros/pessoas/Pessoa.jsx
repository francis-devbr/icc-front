import SimpleHeader from "components/header/SimpleHeader";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Forms from "./form/Form";

const Pessoa = () => {
  const params = useParams();

  return (
    <>
      <SimpleHeader name="Pessoa" parentName="Cadastro Geral" />
      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader>
                <h3 className="mb-0">
                  {params.acao === "new"
                    ? "Novo registro"
                    : params.acao === "view"
                    ? `Pessoa #${params.id}`
                    : `Editar Pessoa #${params.id}`}
                </h3>
              </CardHeader>
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

export default Pessoa;
