import { useKeycloak } from "@react-keycloak/web";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

import LoadingPage from "components/LoadingPage";
import { useGetOcorrenciaInternaMutation } from "app/api/ocorrenciaInternaApiSlice";
import { useAddOcorrenciaInternaMutation } from "app/api/ocorrenciaInternaApiSlice";
import ReactBSAlert from "react-bootstrap-sweetalert";

const Forms = (props) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();

  const [alert, setAlert] = useState(null);
  const [getOcorrenciaInterna, { isLoading }] =
    useGetOcorrenciaInternaMutation();
  const [addOcorrenciaInterna] = useAddOcorrenciaInternaMutation();
  const [ocorrencia, setOcorrencia] = useState({ id: null, nome: "" });

  const {
    caseId,
    casePrincipal,
    codigoLoja,
    nomeLoja,
    diretorLoja,
    regiao,
    formato,
    bandeira,
    uf,
    cidade,
    endereco,
    dtaAberturaOcorrencia,
    dtaFimInvesti,
    dtaFimOcorrencia,
    duracaoInvestig,
    duracaoCaso,
    finalizadoRelatorio,
    envelopeLP,
    impacto,
    statusCaso,
    preparadoPor,
    revisadoPor,
    apiSuporte,
    alegacaoPrimaria,
    resumoAlegacacao,
    observacoes,
    valorPerda,
    valorRecuperado,
    pesquisa,
  } = ocorrencia;

  const errorAlert = () => {
    setAlert(
      <ReactBSAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Erro ao registrar!"
        onConfirm={() => setAlert(null)}
        onCancel={() => setAlert(null)}
      >
        Erro ao tentar inserir o registro
      </ReactBSAlert>
    );
  };

  const successAlert = () => {
    setAlert(
      <ReactBSAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Registro Salvo!"
        onConfirm={() => {
          setAlert(null);
          navigate(`/admin/ocorrencias-internas`);
        }}
        onCancel={() => setAlert(null)}
        timeout={2000}
        showConfirm={false}
      ></ReactBSAlert>
    );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOcorrencia((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (props?.id) {
      const get = async () => {
        const response = await getOcorrenciaInterna(props.id);
        setOcorrencia(response.data);
      };
      get();
    }
  }, []);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    await addOcorrenciaInterna(ocorrencia)
      .then((r) => {
        setOcorrencia((prevState) => ({
          ...prevState,
          id: r.data.id,
        }));
        successAlert();
      })
      .catch((e) => {
        console.log(e);
        errorAlert();
      });
  };

  return (
    <>
      {alert}
      {isLoading && <LoadingPage />}
      {!isLoading && (
        <Form role="form">
          <Row>
            <Col md="1">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Case ID
                </Label>
                <Input
                  className="form-control-sm"
                  id="caseId"
                  name="caseId"
                  type="text"
                  value={caseId}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Case Principal
                </Label>
                <Input
                  className="form-control-sm"
                  id="casePrincipal"
                  name="casePrincipal"
                  type="text"
                  value={casePrincipal}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Código da Loja
                </Label>
                <Input
                  className="form-control-sm"
                  id="codigoLoja"
                  name="codigoLoja"
                  type="text"
                  value={codigoLoja}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Nome da Loja
                </Label>
                <Input
                  className="form-control-sm"
                  id="nomeLoja"
                  name="nomeLoja"
                  type="text"
                  value={nomeLoja}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Diretor da Loja
                </Label>
                <Input
                  className="form-control-sm"
                  id="diretorLoja"
                  name="diretorLoja"
                  type="text"
                  value={diretorLoja}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Região
                </Label>
                <Input
                  className="form-control-sm"
                  id="regiao"
                  name="regiao"
                  type="text"
                  value={regiao}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Formato
                </Label>
                <Input
                  className="form-control-sm"
                  id="formato"
                  name="formato"
                  type="text"
                  value={formato}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Bandeira
                </Label>
                <Input
                  className="form-control-sm"
                  id="bandeira"
                  name="bandeira"
                  type="text"
                  value={bandeira}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="1">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  UF
                </Label>
                <Input
                  className="form-control-sm"
                  id="uf"
                  name="uf"
                  type="text"
                  value={uf}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Cidade
                </Label>
                <Input
                  className="form-control-sm"
                  id="cidade"
                  name="cidade"
                  type="text"
                  value={cidade}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Endereco
                </Label>
                <Input
                  className="form-control-sm"
                  id="endereco"
                  name="endereco"
                  type="text"
                  value={endereco}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Data Abertura Ocor
                </Label>
                <Input
                  className="form-control-sm"
                  id="dtaAberturaOcorrencia"
                  name="dtaAberturaOcorrencia"
                  type="text"
                  value={dtaAberturaOcorrencia}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Data Fim Investigação
                </Label>
                <Input
                  className="form-control-sm"
                  id="dtaFimInvesti"
                  name="dtaFimInvesti"
                  type="text"
                  value={dtaFimInvesti}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Data Fim Ocorrência
                </Label>
                <Input
                  className="form-control-sm"
                  id="dtaFimOcorrencia"
                  name="dtaFimOcorrencia"
                  type="text"
                  value={dtaFimOcorrencia}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Duração Investigação
                </Label>
                <Input
                  className="form-control-sm"
                  id="duracaoInvestig"
                  name="duracaoInvestig"
                  type="text"
                  value={duracaoInvestig}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Duração do Caso
                </Label>
                <Input
                  className="form-control-sm"
                  id="duracaoCaso"
                  name="duracaoCaso"
                  type="text"
                  value={duracaoCaso}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Finalizado com Relatorio?
                </Label>
                <Input
                  className="form-control-sm"
                  id="finalizadoRelatorio"
                  name="finalizadoRelatorio"
                  type="text"
                  value={finalizadoRelatorio}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Envelepo LP?
                </Label>
                <Input
                  className="form-control-sm"
                  id="envelopeLP"
                  name="envelopeLP"
                  type="text"
                  value={envelopeLP}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Impacto
                </Label>
                <Input
                  className="form-control-sm"
                  id="impacto"
                  name="impacto"
                  type="text"
                  value={impacto}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Status do Caso
                </Label>
                <Input
                  className="form-control-sm"
                  id="statusCaso"
                  name="statusCaso"
                  type="text"
                  value={statusCaso}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Preparado Por
                </Label>
                <Input
                  className="form-control-sm"
                  id="preparadoPor"
                  name="preparadoPor"
                  type="text"
                  value={preparadoPor}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Revisado Por
                </Label>
                <Input
                  className="form-control-sm"
                  id="revisadoPor"
                  name="revisadoPor"
                  type="text"
                  value={revisadoPor}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  API Suporte
                </Label>
                <Input
                  className="form-control-sm"
                  id="apiSuporte"
                  name="apiSuporte"
                  type="text"
                  value={apiSuporte}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Alegação Primaria
                </Label>
                <Input
                  className="form-control-sm"
                  id="alegacaoPrimaria"
                  name="alegacaoPrimaria"
                  type="textarea"
                  resize="none"
                  value={alegacaoPrimaria}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Resumo Alegacação
                </Label>
                <Input
                  className="form-control-sm"
                  id="resumoAlegacacao"
                  name="resumoAlegacacao"
                  type="textarea"
                  resize="none"
                  value={resumoAlegacacao}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md="4">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Observações
                </Label>
                <Input
                  className="form-control-sm"
                  id="observacoes"
                  name="observacoes"
                  type="textarea"
                  resize="none"
                  value={observacoes}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  R$ Valor da Perda{" "}
                </Label>
                <Input
                  className="form-control-sm"
                  id="valorPerda"
                  name="valorPerda"
                  type="number"
                  value={valorPerda}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  R$ Valor Recuperado{" "}
                </Label>
                <Input
                  className="form-control-sm"
                  id="valorRecuperado"
                  name="valorRecuperado"
                  type="number"
                  value={valorRecuperado}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label className="form-control-label" for="nomeLoja">
                  Pesquisa?
                </Label>
                <Input
                  className="form-control-sm"
                  id="pesquisa"
                  name="pesquisa"
                  type="text"
                  value={pesquisa}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <hr />

          {props.acao === "view" ? (
            keycloak?.hasResourceRole("manager") && (
              <Button
                color="primary"
                className="btn  mb-2 w-25"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/admin/naturezas/${caseId}/edit`);
                }}
              >
                <i className="fa-solid fa-check"></i> Editar
              </Button>
            )
          ) : (
            <>
              <Button
                color="primary"
                className="btn mb-2 w-25"
                onClick={(e) => handleOnSubmit(e)}
              >
                <i className="fa-solid fa-check"></i> Salvar
              </Button>
            </>
          )}

          <Button
            className="btn  btn-danger mb-2 w-25"
            onClick={(e) => {
              e.preventDefault();
              navigate("/admin/ocorrencias-internas");
            }}
          >
            <i className="fa-solid fa-times"></i> Cancelar
          </Button>
        </Form>
      )}
    </>
  );
};

export default Forms;
