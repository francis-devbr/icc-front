import { useEffect, useState } from "react";
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
  InputGroup,
} from "reactstrap";

import HeaderNoInfo from "../components/header/HeaderNoInfo";
import { fetchNotaFiscal } from "./notaFiscal/notaFiscalAPI";
import { motion } from "framer-motion";
const NotaFiscal = (props) => {
  const [notaFiscal, setNotaFiscal] = useState();
  const [numeroNF, setNumeroNF] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [stateModal, setStateModal] = useState({
    defaultModal: false,
  });

  async function find() {
    if (numeroNF) {
      setIsLoading(true);
      setNotaFiscal(null);
      fetchNotaFiscal(numeroNF)
        .then((response) => {
          setTimeout(() => {
            setNotaFiscal(response.data);
            setIsLoading(false);

            setStateModal(true);
          }, 3000);
        })
        .catch((e) => {
          setIsLoading(false);
          console.log(e);
        });
    }
  }

  useEffect(() => {}, []);

  return (
    <>
      <HeaderNoInfo />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Form role="form">
                    <Row className="row-cols-lg-auto g-3 align-items-center">
                      <Col md="6">
                        <FormGroup>
                          <InputGroup>
                            <Input
                              id="nf"
                              name="nf"
                              value={numeroNF}
                              onChange={(event) =>
                                setNumeroNF(event.target.value.trim())
                              }
                              placeholder="Nº Nota Fiscal"
                              type="text"
                            />
                            <Button
                              color="primary"
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                find();
                              }}
                              disabled={isLoading}
                            >
                              Pesquisar
                            </Button>
                          </InputGroup>
                        </FormGroup>
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
                        <th scope="col">{`Honorários (${
                          notaFiscal ? notaFiscal.honorario : 0
                        }%)`}</th>
                        <th scope="col" />
                      </tr>
                    </thead>

                    <tbody>
                      <>
                        <tr>
                          <th scope="row">
                            {notaFiscal ? (
                              notaFiscal.nrNotaFiscal
                            ) : isLoading ? (
                              <div className="loading" />
                            ) : (
                              "-"
                            )}
                          </th>
                          <td>
                            {notaFiscal ? (
                              notaFiscal.campanha
                            ) : isLoading ? (
                              <div className="loading" />
                            ) : (
                              "-"
                            )}
                          </td>
                          <td>
                            {notaFiscal ? (
                              notaFiscal.empresa
                            ) : isLoading ? (
                              <div className="loading" />
                            ) : (
                              "-"
                            )}
                          </td>
                          <td>
                            {notaFiscal ? (
                              notaFiscal.valorTotal.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                              })
                            ) : isLoading ? (
                              <div className="loading" />
                            ) : (
                              "-"
                            )}
                          </td>
                          <td>
                            {notaFiscal ? (
                              notaFiscal.valorFrete.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                              })
                            ) : isLoading ? (
                              <div className="loading" />
                            ) : (
                              "-"
                            )}
                          </td>
                          <td>
                            {notaFiscal ? (
                              notaFiscal.valorNotaFaturada.toLocaleString(
                                "pt-br",
                                { style: "currency", currency: "BRL" }
                              )
                            ) : isLoading ? (
                              <div className="loading" />
                            ) : (
                              "-"
                            )}
                          </td>
                          <td>
                            {notaFiscal ? (
                              notaFiscal.valorTotalGeral.toLocaleString(
                                "pt-br",
                                { style: "currency", currency: "BRL" }
                              )
                            ) : isLoading ? (
                              <div className="loading" />
                            ) : (
                              "-"
                            )}
                          </td>
                          <td></td>
                        </tr>
                      </>
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter className="py-4">
                  <Col md="4">
                    <Row>
                      <Col md="4">
                        <Button
                          color="primary"
                          type="button"
                          disabled={isLoading}
                        >
                          <i className="fas fa-file-alt"></i> Relatorio
                        </Button>
                      </Col>
                      <Col md="4">
                        <Button
                          color="primary"
                          type="button"
                          disabled={isLoading}
                        >
                          <i className="fas fa-theater-masks" /> Parceiro
                        </Button>
                      </Col>

                      <Col md="4">
                        <Button
                          color="primary"
                          type="button"
                          disabled={isLoading}
                        >
                          <i className="far fa-handshake"></i> Produto
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </Row>
      </Container>

    </>
  );
};

export default NotaFiscal;
