import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import parametros from "app/data/params.json";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import { useEffect, useState } from "react";
import { useGetNaturezasMutation } from "app/api/naturezaFatoApiSlice";
import ReactBSAlert from "react-bootstrap-sweetalert";

import Dropzone from "dropzone";

import {
  useAddOcorrenciaMutation,
  useGetOcorrenciaMutation,
} from "app/api/ocorrencia/ocorrenciaApiSlice";
import LoadingPage from "components/LoadingPage";
Dropzone.autoDiscover = false;
const Forms = (props) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  const [alert, setAlert] = useState(null);
  const [getNaturezas] = useGetNaturezasMutation();

  const [getOcorrencia, { isLoading }] = useGetOcorrenciaMutation();
  const [addOcorrencia] = useAddOcorrenciaMutation();

  const [naturezas, setNaturezas] = useState(null);

  const [ocorrencia, setOcorrencia] = useState({
    protocolo: "",
    data_ocorrencia: "",
    naturezaFato: null,
    valor: 0,
    responsavel: "",
    inquerito_policial: "",
    delegacia: "",
    status: "",
    loja: null,
    observacao: "",
  });

  const {
    protocolo,
    data_ocorrencia,
    valor,
    responsavel,
    inquerito_policial,
    delegacia,
    loja,
    observacao,
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

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    await addOcorrencia(ocorrencia)
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
  useEffect(() => {
    if (props?.id) {
      const get = async () => {
        const response = await getOcorrencia({ id: props.id });
        setOcorrencia(response.data);
      };
      get();
    }
    getNaturezas().then((x) => setNaturezas(x.data));

    let currentMultipleFile = undefined;
    // multiple dropzone file - accepts any type of file
    new Dropzone(document.getElementById("dropzone-multiple"), {
      url: "https://",
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer: document.getElementsByClassName(
        "dz-preview-multiple"
      )[0],
      previewTemplate: document.getElementsByClassName("dz-preview-multiple")[0]
        .innerHTML,
      maxFiles: null,
      acceptedFiles: null,
      init: function () {
        this.on("addedfile", function (file) {
          if (currentMultipleFile) {
          }
          currentMultipleFile = file;
        });
      },
    });
    document.getElementsByClassName("dz-preview-multiple")[0].innerHTML = "";
  }, []);

  return (
    <>
      {alert}
      {isLoading && <LoadingPage />}

      <Form role="form">
        <Row>
          <Col md="3">
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
              <Label className="form-control-label" for="data_ocorrencia">
                Data Ocorrencia
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

          <Col md="3">
            <FormGroup>
              <Label className="form-control-label" for="naturezaFato">
                Natureza do Fato
              </Label>
              <Input
                className="form-control-sm"
                id="naturezaFato"
                name="naturezaFato"
                type="select"
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

          <Col md="3">
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
          <Col md="3">
            <FormGroup>
              <Label className="form-control-label" for="inquerito_policial">
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

          <Col md="5">
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
        </Row>
        <Row>
          <Col md="1">
            <FormGroup>
              <Label className="form-control-label" for="loja">
                Codigo Loja
              </Label>
              <Input
                className="form-control-sm"
                id="loja"
                name="loja"
                value={loja}
                type="text"
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label className="form-control-label" for="nome-loja">
                Nome
              </Label>
              <Input
                className="form-control-sm"
                id="nome-loja"
                name="nome-loja"
                value=""
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
                className="form-control-sm"
                id="diretor-loja"
                name="diretor-loja"
                value=""
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
                className="form-control-sm"
                id="formato-loja"
                name="formato-loja"
                value=""
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
                className="form-control-sm"
                id="bandeira-loja"
                name="bandeira-loja"
                value=""
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
                className="form-control-sm"
                id="cidade-loja"
                name="cidade-loja"
                value=""
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
                className="form-control-sm"
                id="uf-loja"
                name="uf-loja"
                value=""
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <Label className="form-control-label" for="observacao">
                Observacoes
              </Label>
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
        <Row>
          <Col>
            <div className="dropzone dropzone-multiple" id="dropzone-multiple">
              <div className="fallback">
                <div className="custom-file">
                  <input
                    className="custom-file-input"
                    id="customFileUploadMultiple"
                    multiple="multiple"
                    type="file"
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="customFileUploadMultiple"
                  >
                    Escolha os arquivos
                  </label>
                </div>
              </div>
              <ListGroup
                className=" dz-preview dz-preview-multiple list-group-lg"
                flush
              >
                <ListGroupItem className=" px-0">
                  <Row className=" align-items-center">
                    <Col className=" col-auto">
                      <div className=" avatar">
                        <img
                          alt="..."
                          className=" avatar-img rounded"
                          data-dz-thumbnail
                          src="..."
                        />
                      </div>
                    </Col>
                    <div className=" col ml--3">
                      <h4 className=" mb-1" data-dz-name>
                        ...
                      </h4>
                      <p className=" small text-muted mb-0" data-dz-size>
                        ...
                      </p>
                    </div>
                    <Col className=" col-auto">
                      <Button size="sm" color="danger" data-dz-remove>
                        <i className="fas fa-trash" />
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </div>
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
      </Form>
    </>
  );
};

export default Forms;
