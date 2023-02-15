import SimpleHeader from "components/header/SimpleHeader";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import Forms from "./form/Form";

const Natureza = () => {
  const params = useParams();

  return (
    <>
      <SimpleHeader name="Natureza Fato" parentName="Cadastro Geral" />
      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader>
                {params.acao === "new"
                  ? "Adicionar novo registro"
                  : params.acao === "view"
                  ? `Formato Natureza #${params.id}`
                  : `Editar Formato Natureza #${params.id}`}
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

export default Natureza;
