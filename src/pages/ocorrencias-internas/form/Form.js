import { useKeycloak } from "@react-keycloak/web";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useAddNaturezaMutation, useGetNaturezaMutation } from "app/api/naturezaFatoApiSlice";

import LoadingPage from "components/LoadingPage";

const Forms = (props) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  const [getNatureza, { isLoading }] = useGetNaturezaMutation();

  const [addNatureza] = useAddNaturezaMutation();

  const [ocorrencia, setOcorrencia] = useState({ id: null, nome: "" });

  const {caseId, casePrincipal, codigoLoja, nomeLoja, diretorLoja, regiao, formato, bandeira, uf, cidade, endereco, dtaAberturaOcorrencia,
      dtaFimInvesti, dtaFimOcorrencia, duracaoInvestig, duracaoCaso, finalizadoRelatorio,
       envelopeLP, impacto, statusCaso, preparadoPor, revisadoPor, apiSuporte, alegacaoPrimaria, resumoAlegacacao,
        planoInvestigacao, observacoes, valorPerda, valorRecuperado, pesquisa } = ocorrencia;

  useEffect(() => {
    if (props?.id) {
      const get = async () => {
        const response = await getNatureza({ id: props.id });
        setOcorrencia(response.data);
      };
      get();
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOcorrencia((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const values = [nomeLoja];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const data = {
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
        planoInvestigacao,
        observacoes,
        valorPerda,
        valorRecuperado,
        pesquisa
      };

      await addNatureza(data)
        .then((r) => {
          setOcorrencia((prevState) => ({
            ...prevState,
            id: r.data.id,
          }));
          navigate(`/admin/naturezas/${r.data.id}/view`);
        });
    } else {
      errorMsg = "Please fill out all the fields.";
      
    }
  };

  return (
    <>
      {isLoading && <LoadingPage />}
      {!isLoading && (
        <Form role="form">
          <Row>
          <Col md="1">
            <FormGroup>
              <Label for="nomeLoja">Case ID</Label>
              <Input
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
              <Label for="nomeLoja">Case Principal</Label>
              <Input
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
              <Label for="nomeLoja">Código da Loja</Label>
              <Input
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
              <Label for="nomeLoja">Nome da Loja</Label>
              <Input
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
              <Label for="nomeLoja">Diretor da Loja</Label>
              <Input
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
              <Label for="nomeLoja">Região</Label>
              <Input
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
              <Label for="nomeLoja">Formato</Label>
              <Input
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
              <Label for="nomeLoja">Bandeira</Label>
              <Input
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
              <Label for="nomeLoja">UF</Label>
              <Input
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
              <Label for="nomeLoja">Cidade</Label>
              <Input
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
              <Label for="nomeLoja">Endereco</Label>
              <Input
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
              <Label for="nomeLoja">Data Abertura Ocor</Label>
              <Input
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
              <Label for="nomeLoja">Data Fim Investigação</Label>
              <Input
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
              <Label for="nomeLoja">Data Fim Ocorrência</Label>
              <Input
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
              <Label for="nomeLoja">Duração Investigação</Label>
              <Input
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
              <Label for="nomeLoja">Duração do Caso</Label>
              <Input
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
              <Label for="nomeLoja">Finalizado com Relatorio?</Label>
              <Input
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
              <Label for="nomeLoja">Envelepo LP?</Label>
              <Input
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
              <Label for="nomeLoja">Impacto</Label>
              <Input
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
              <Label for="nomeLoja">Status do Caso</Label>
              <Input
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
              <Label for="nomeLoja">Preparado Por</Label>
              <Input
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
              <Label for="nomeLoja">Revisado Por</Label>
              <Input
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
              <Label for="nomeLoja">API Suporte</Label>
              <Input
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
              <Label for="nomeLoja">Alegação Primaria</Label>
              <Input
              id="alegacaoPrimaria"
              name="alegacaoPrimaria"
              type="textarea"
              value={alegacaoPrimaria}
              onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label for="nomeLoja">Resumo Alegacação</Label>
              <Input
              id="resumoAlegacacao"
              name="resumoAlegacacao"
              type="textarea"
              value={resumoAlegacacao}
              onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          
          <Col md="4">
            <FormGroup>
              <Label for="nomeLoja">Observações</Label>
              <Input
              id="observacoes"
              name="observacoes"
              type="textarea"
              value={observacoes}
              onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label for="nomeLoja">R$ Valor da Perda </Label>
              <Input
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
              <Label for="nomeLoja">R$ Valor Recuperado </Label>
              <Input
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
              <Label for="nomeLoja">Pesquisa?</Label>
              <Input
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
