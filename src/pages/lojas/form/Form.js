import { useEffect, useState } from "react";
import ReactBSAlert from "react-bootstrap-sweetalert";
import InputMask from "react-input-mask";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";
import { useAddLojaMutation, useGetLojaMutation } from "app/api/lojasApiSlice";
import { useGetCepMutation } from "app/api/cepApiSlice";
import { useNavigate } from "react-router-dom";

import { useGetUfsMutation } from "app/api/cep/ufApiSlice";
import { useGetFormatosMutation } from "app/api/formatoLojaApiSlice";
import { useKeycloak } from "@react-keycloak/web";
import LoadingPage from "components/LoadingPage";

const Forms = (props) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  const [addLoja] = useAddLojaMutation();
  const [getCep] = useGetCepMutation();
  const [getLoja, { isLoading }] = useGetLojaMutation();

  const [getFormatos] = useGetFormatosMutation();

  const [getUfs] = useGetUfsMutation();

  const [formatos, setFormatos] = useState([]);

  const [regiao, setRegiao] = useState("");

  const [ufs, setUfs] = useState(null);

  const [loja, setLoja] = useState({
    id: props?.id,
    sigla: "",
    nome: "",
    formato: null,
    bandeira: null,
    cep: "",
    numero: "",
    complemento: "",
    rua: "",
    bairro: "",
    cidade: "",
    uf: "SP",
  });

  const {
    id,
    sigla,
    nome,
    formato,
    cep,
    numero,
    complemento,
    rua,
    bairro,
    cidade,
    uf,
  } = loja;

  const [alert, setAlert] = useState(null);

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
          navigate(`/admin/lojas`);
        }}
        onCancel={() => setAlert(null)}
        timeout={2000}
        showConfirm={false}
      ></ReactBSAlert>
    );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoja((prevState) => ({
      ...prevState,
      [name]: value.toUpperCase(),
    }));
  };

  useEffect(() => {
    
    let _uf;
    if (props?.id) {
      const get = async () => {
        await getLoja(props.id).then((r) => {
          _uf = r.data.uf;
          setLoja(r.data);
        });
      };
      get();
    }

    const ufs = async () => {
      const r = await getUfs();
      if (_uf)
        r.data
          ?.filter((u) => u.sigla.toUpperCase() === _uf.toUpperCase())
          .map((filteredUF) => setRegiao(filteredUF.regiao.nome));

      setUfs(r.data);
    };

    ufs();

    const formatosLoja = async () => {
      const r = await getFormatos();
      setFormatos(r.data);
    };

    formatosLoja();
  }, []);

  useEffect(() => {
    if (ufs)
      ufs
        ?.filter((u) => u.sigla.toUpperCase() === uf.toUpperCase())
        .map((filteredUF) => setRegiao(filteredUF.regiao.nome));
  }, [uf]);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    await addLoja(loja)
      .then((r) => {
        successAlert();
      })
      .catch((e) => {
        console.log(e);
        errorAlert();
      });
  };

  const findByCEP = async (event) => {
    event.preventDefault();
    console.log(cep);
    const l = await getCep(cep);

    setLoja((prevState) => ({
      ...prevState,
      rua: l.data?.logradouro,
      uf: l.data?.uf.toUpperCase(),
      cidade: l.data?.localidade,
      bairro: l.data?.bairro,
    }));
  };

  return (
    <>
      {alert}
      {alert}
      {isLoading && <LoadingPage />}
      {!isLoading && (
        <Form role="form">
          <Row>
            <Col md="1">
              <FormGroup>
                <Label className="form-control-label" for="sigla">
                  Sigla
                </Label>
                <Input
                  className="form-control-sm"
                  id="sigla"
                  name="sigla"
                  type="text"
                  value={sigla}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md="4">
              <FormGroup>
                <Label className="form-control-label" for="nome">
                  Nome
                </Label>
                <Input
                  className="form-control-sm"
                  id="nome"
                  name="nome"
                  type="text"
                  value={nome}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md="3">
              <FormGroup>
                <Label className="form-control-label" for="formato">
                  Formato
                </Label>

                <Input
                  className="form-control-sm"
                  id="formato"
                  name="formato"
                  type="select"
                  value={formato}
                  onChange={handleInputChange}
                >
                  <option></option>
                  {formatos?.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.nome}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label className="form-control-label" for="bandeira">
                  Bandeira
                </Label>
                <Input
                  className="form-control-sm"
                  id="bandeira"
                  name="bandeira"
                  type="text"
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row className="row-cols-lg-auto g-3 align-items-center">
            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="cep">
                  <i className="fa-solid fa-location-dot"></i> CEP
                </Label>
                <InputGroup>
                  <Input
                    className="form-control-sm"
                    id="cep"
                    name="cep"
                    type="text"
                    mask="99999-999"
                    maskChar=" "
                    tag={InputMask}
                    normalize={()=>parseInt(cep.replace(/[^0-9]/g, ''))}
                    value={cep}
                    onChange={handleInputChange}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        findByCEP(e);
                      }
                    }}
                  />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md="5">
              <FormGroup>
                <Label className="form-control-label" for="rua">
                  Logradouro
                </Label>
                <Input
                  className="form-control-sm"
                  id="rua"
                  name="rua"
                  type="text"
                  value={rua}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md="1">
              <FormGroup>
                <Label className="form-control-label" for="numero">
                  Numero
                </Label>
                <Input
                  className="form-control-sm"
                  id="numero"
                  name="numero"
                  type="text"
                  value={numero}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md="4">
              <FormGroup>
                <Label className="form-control-label" for="complemento">
                  Complemento
                </Label>
                <Input
                  className="form-control-sm"
                  id="complemento"
                  name="complemento"
                  type="text"
                  value={complemento}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <FormGroup>
                <Label className="form-control-label" for="bairro">
                  Bairro
                </Label>
                <Input
                  className="form-control-sm"
                  id="bairro"
                  name="bairro"
                  type="text"
                  value={bairro}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="cidade">
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

            <Col md="1">
              <FormGroup>
                <Label className="form-control-label" for="uf">
                  UF
                </Label>

                <Input
                  className="form-control-sm"
                  id="uf"
                  name="uf"
                  type="select"
                  value={uf}
                  onChange={handleInputChange}
                >
                  <option></option>
                  {ufs?.map((u) => (
                    <option key={u.id} value={u.sigla}>
                      {u.sigla}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col md="2">
              <FormGroup>
                <Label className="form-control-label" for="regiao">
                  Regiao
                </Label>
                <Input
                  className="form-control-sm"
                  id="regiao"
                  name="regiao"
                  type="text"
                  value={regiao}
                  onChange={handleInputChange}
                ></Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <FormGroup>
                <Label className="form-control-label" for="responsavel">
                  <i className="fa-solid fa-user-tie"></i> Responsável
                </Label>
                <Input
                  className="form-control-sm"
                  id="responsavel"
                  name="responsavel"
                  type="text"
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
                  navigate(`/admin/lojas/${id}/edit`);
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
              navigate("/admin/lojas");
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
