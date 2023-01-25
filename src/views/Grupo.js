import {
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  CardBody,
  Form,
  CardFooter,
  FormGroup,
  Input,
  Button,
  Table,
  Badge,
} from "reactstrap";
import Header from "../components/header/Header";
import HeaderNoInfo from "../components/header/HeaderNoInfo";

const Grupo = (props) => {

  


  return (
    <>
      <HeaderNoInfo />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Form role="form">
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Input placeholder="Nº Nota Fiscal" type="text" />
                      </FormGroup>
                    </Col>

                    <Col md="6">
                      <Button color="primary" type="button">
                        Pesquisar
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardHeader>
              <CardBody>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Nº NF</th>
                      <th scope="col">Campanha</th>
                      <th scope="col">Empresa</th>
                      <th scope="col">Total</th>
                      <th scope="col">Frete Calculado</th>
                      <th scope="col">Nota Faturada</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">ssss</th>
                      <td>$2,500 USD</td>
                      <td>$2,500 USD</td>
                      <td>$2,500 USD</td>
                      <td>$2,500 USD</td>
                      <td>$2,500 USD</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter className="py-4">
                <Col md="4">
                  <Row>
                    <Col md="4">
                      <Button color="success" type="button">
                        <i className="fas fa-file-alt"></i> Relatorio
                      </Button>
                    </Col>
                    <Col md="4">
                      <Button color="success" type="button">
                        <i className="fas fa-theater-masks" /> Parceiro
                      </Button>
                    </Col>

                    <Col md="4">
                      <Button color="success" type="button">
                        <i className="far fa-handshake"></i> Produto
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Grupo;
