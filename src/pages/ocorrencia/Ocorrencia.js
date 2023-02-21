import SimpleHeader from "components/header/SimpleHeader";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";

import Forms from "./form/Form";

const Ocorrencia = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <SimpleHeader name="Ocorrencia" parentName="Ocorrencia" />
      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader>
                <Row className="align-items-center">
                  <Col>
                    <h3 className="mb-0">
                      {params.acao === "new"
                        ? "Novo registro"
                        : params.acao === "view"
                        ? `Ocorrencia #${params.id}`
                        : `Editar Ocorrencia #${params.id}`}
                    </h3>
                  </Col>

                  {params.acao !== "new" ? (
                    <Button
                      className="btn-icon btn-neutral"
                      color="default"
                      onClick={() => navigate("/admin/ocorrencias/new")}
                    >
                      <span className="btn-inner--icon">
                        <i class="ni ni-fat-add"></i>
                      </span>
                      <span className="btn-inner--text">NOVO REGISTRO</span>
                    </Button>
                  ) : null}
                </Row>
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

export default Ocorrencia;
