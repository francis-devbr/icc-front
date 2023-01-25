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
  Label,
} from "reactstrap";

import HeaderNoInfo from "../components/header/HeaderNoInfo";

const Liberacao = (props) => {
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
                    <Col md="2">
                      <FormGroup>
                        <Label for="perioliberado">
                          Periodo a ser liberado
                        </Label>
                        <Input
                          id="perioliberado"
                          name="perioliberado"
                          type="text"
                        />
                      </FormGroup>
                    </Col>

                    <Col md="2">
                      <FormGroup>
                        <Label for="mesAberto">Mes em aberto</Label>
                        <Input id="mesAberto" name="mesAberto" type="text" />
                      </FormGroup>
                    </Col>

                    <Col md="2">
                      <FormGroup>
                        <Label for="situacao">Situacao</Label>
                        <Input id="situacao" name="situacao" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="2">
                      <FormGroup>
                        <Label for="dataCargaOnline">
                          Data da Carga Online
                        </Label>
                        <Input
                          id="dataCargaOnline"
                          name="dataCargaOnline"
                          type="date"
                        />
                      </FormGroup>
                    </Col>

                    <Col md="2">
                      <FormGroup>
                        <Label for="dataUltimoFechamento">
                          Data Ultimo Fechamento
                        </Label>
                        <Input
                          id="dataUltimoFechamento"
                          name="dataUltimoFechamento"
                          type="date"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="8">
                      <FormGroup>
                        <Label for="responsavel">Responsavel</Label>
                        <Input
                          id="responsavel"
                          name="responsavel"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardHeader>
              <CardBody>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Situacao</th>
                      <th scope="col">Grupo</th>
                      <th scope="col">Corretor TMS</th>
                      <th scope="col">Corretor TMB</th>
                      <th scope="col">Produto</th>
                      <th scope="col">Ramo</th>
                      <th scope="col">Familia</th>
                      <th scope="col">Mes de Fechamento</th>
                      <th scope="col">Valor Producao</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                     
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

export default Liberacao;
