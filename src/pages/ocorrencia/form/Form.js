import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import parametros from "app/data/params.json";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useEffect, useState } from "react";
import { useGetNaturezasMutation } from "app/api/naturezaFatoApiSlice";
import ReactBSAlert from "react-bootstrap-sweetalert";

import {
  useAddOcorrenciaMutation,
  useGetOcorrenciaMutation,
} from "app/api/ocorrencia/ocorrenciaApiSlice";
import LoadingPage from "components/LoadingPage";
import { useGetLojaBySiglaMutation } from "app/api/lojasApiSlice";

const Forms = (props) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  const [alert, setAlert] = useState(null);
  const [getNaturezas] = useGetNaturezasMutation();

  const [getLojaBySigla] = useGetLojaBySiglaMutation();

  const [getOcorrencia, { isLoading }] = useGetOcorrenciaMutation();
  const [addOcorrencia] = useAddOcorrenciaMutation();

  const [naturezas, setNaturezas] = useState(null);

  const [ocorrencia, setOcorrencia] = useState({
    id: props?.id,
    protocolo: "",
    data_ocorrencia: "",
    natureza_fato: {},
    valor: 0,
    responsavel: "",
    inquerito_policial: "",
    delegacia: "",
    status: "aberto",
    loja: null,
    observacao: "",
  });

  const {
    id,
    protocolo,
    data_ocorrencia,
    valor,
    responsavel,
    inquerito_policial,
    natureza_fato,
    delegacia,
    loja,
    observacao,
    status,
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
          navigate(`/admin/ocorrencias`);
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

  const handleNaturezaInputChange = (event) => {
    const { name, value } = event.target;
    const n = naturezas?.filter((n) => n.id === Number(value));

    setOcorrencia((prevState) => ({
      ...prevState,
      [name]: n[0],
    }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    await addOcorrencia(ocorrencia)
      .then((r) => {
        successAlert();
      })
      .catch((e) => {
        console.log(e);
        errorAlert();
      });
  };

  const searchLoja = async (event) => {
    event.preventDefault();

    await getLojaBySigla({ sigla: event.target.value })
      .then((r) => {
        console.log(r.data);

        setOcorrencia((prevState) => ({
          ...prevState,
          loja: r.data,
        }));
      })
      .catch((e) => {
        console.log(e);
        errorAlert();
      });
  };

  useEffect(() => {
    if (props?.id) {
      const get = async () => {
        const response = await getOcorrencia({ id: props.id });
        setOcorrencia(response.data);
      };
      get();
    }
    getNaturezas().then((x) => setNaturezas(x.data));
  }, []);

  const [state, setState] = useState({
    tabs: 1,
  });

  const toggleNavs = (e, state, index) => {
    e.preventDefault();
    setState({
      [state]: index,
    });
  };
  return (
    <>
      {alert}
      {isLoading && <LoadingPage />}

      <Form role="form">
        <div className="pl-lg-4">
          <Row>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="protocolo">
                  <i class="fa-solid fa-hashtag"></i> Protocolo
                </Label>
                <Input
                  id="protocolo"
                  name="protocolo"
                  value={protocolo}
                  type="text"
                  className="form-control-sm"
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="naturezaFato">
                  Natureza do Fato
                </Label>
                <Input
                  className="form-control-sm"
                  id="natureza_fato"
                  name="natureza_fato"
                  type="select"
                  value={natureza_fato?.id}
                  onChange={handleNaturezaInputChange}
                >
                  <option></option>
                  {naturezas?.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.nome}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="data_ocorrencia">
                  Data
                </Label>

                <Input
                  className="form-control-sm"
                  id="data_ocorrencia"
                  name="data_ocorrencia"
                  type="date"
                  value={data_ocorrencia}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md="1">
              <FormGroup>
                <Label className="form-control-label" for="valor">
                  Valor
                </Label>
                <Input
                  className="form-control-sm"
                  id="valor"
                  name="valor"
                  value={valor}
                  type="text"
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="status">
                  Status
                </Label>

                <Input
                  className="form-control-sm"
                  id="status"
                  name="status"
                  type="select"
                  value={status}
                  onChange={handleInputChange}
                  required
                >
                  <option></option>
                  {parametros.ocorrencia.status?.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="form-control-label" for="responsavel">
                  Responsavel Tratativa
                </Label>
                <Input
                  className="form-control-sm"
                  id="responsavel"
                  name="responsavel"
                  value={responsavel}
                  type="text"
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label
                      className="form-control-label"
                      for="inquerito_policial"
                    >
                      <i class="fa-solid fa-hashtag"></i> Inquerito Policial
                    </Label>
                    <Input
                      className="form-control-sm"
                      id="inquerito_policial"
                      name="inquerito_policial"
                      value={inquerito_policial}
                      type="text"
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label className="form-control-label" for="delegacia">
                      D.P
                    </Label>
                    <Input
                      className="form-control-sm"
                      id="delegacia"
                      name="delegacia"
                      value={delegacia}
                      type="text"
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Input
                  id="observacao"
                  name="observacao"
                  placeholder="Descreva o ocorrido aqui ..."
                  rows="3"
                  resize="none"
                  type="textarea"
                  value={observacao}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </div>
        <hr className="my-4" />

        <h6 className="heading-small text-muted mb-4">Dados da Loja</h6>
        <div className="pl-lg-4">
          <Row>
            <Col md="1">
              <FormGroup>
                <Label className="form-control-label" for="loja">
                  Sigla
                </Label>
                <Input
                  className="form-control-sm"
                  id="loja"
                  name="loja"
                  value={loja?.sigla}
                  type="text"
                  onChange={handleInputChange}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      searchLoja(e);
                    }
                  }}
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="nome-loja">
                  Nome
                </Label>
                <Input
                  className="form-control-sm form-control-flush"
                  disabled
                  id="nome-loja"
                  name="nome-loja"
                  value={loja?.nome}
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="diretor-loja">
                  Diretor
                </Label>
                <Input
                  className="form-control-sm form-control-flush"
                  disabled
                  id="diretor-loja"
                  name="diretor-loja"
                  onChange={handleInputChange}
                  type="text"
                />
              </FormGroup>
            </Col>

            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="formato-loja">
                  Formato
                </Label>
                <Input
                  className="form-control-sm form-control-flush"
                  disabled
                  id="formato-loja"
                  name="formato-loja"
                  onChange={handleInputChange}
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="bandeira-loja">
                  Bandeira
                </Label>
                <Input
                  className="form-control-sm form-control-flush"
                  disabled
                  id="bandeira-loja"
                  name="bandeira-loja"
                  onChange={handleInputChange}
                  type="text"
                />
              </FormGroup>
            </Col>

            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="cidade-loja">
                  Cidade
                </Label>
                <Input
                  className="form-control-sm form-control-flush"
                  disabled
                  id="cidade-loja"
                  name="cidade-loja"
                  value={loja?.cidade}
                  type="text"
                />
              </FormGroup>
            </Col>

            <Col md="1">
              <FormGroup>
                <Label className="form-control-label" for="uf-loja">
                  U.F
                </Label>
                <Input
                  className="form-control-sm form-control-flush"
                  disabled
                  id="uf-loja"
                  name="uf-loja"
                  value={loja?.uf}
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>
        </div>
        <hr className="my-4" />

        {props.acao === "view" ? (
          keycloak?.hasResourceRole("manager") && (
            <Button
              color="primary"
              className="btn  mb-2 w-25"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/admin/ocorrencias/${1}/edit`);
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
            navigate("/admin/ocorrencias");
          }}
        >
          <i className="fa-solid fa-times"></i> Cancelar
        </Button>

        <Button
          className="btn  btn-danger mb-2 w-25"
          onClick={(e) => {
            e.preventDefault();
            navigate("/admin/ocorrencias");
          }}
        >
          <i className="fa-solid fa-times"></i> Cancelar
        </Button>
      </Form>
    </>
  );
};

export default Forms;
