import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import ReactDatetime from "react-datetime";
import parametros from "../../../app/data/params.json";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import { useEffect, useState } from "react";
import { useGetNaturezasMutation } from "../../../app/api/naturezaFatoApiSlice";
import { toast } from "react-toastify";
import {
  useAddOcorrenciaMutation,
  useGetOcorrenciaMutation,
} from "../../../app/api/ocorrencia/ocorrenciaApiSlice";
import UploadImages from "../upload/UploadImages";
import UploadVideos from "../upload/UploadVideos";
import LoadingPage from "../../../components/LoadingPage";

const Forms = (props) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();

  const [getNaturezas] = useGetNaturezasMutation();

  const [getOcorrencia, { isLoading, isSuccess }] = useGetOcorrenciaMutation();
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
    naturezaFato,
    valor,
    responsavel,
    inquerito_policial,
    delegacia,
    status,
    loja,
    observacao,
  } = ocorrencia;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOcorrencia((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    await toast
      .promise(addOcorrencia(ocorrencia), {
        pending: "Salvando...",
        success: "Ocorrencia Salva...",
        error: "Erro ao Salvar",
      })
      .then((r) => {
        setOcorrencia((prevState) => ({
          ...prevState,
          id: r.data.id,
        }));
        navigate(`/admin/ocorrencias/${r.data.id}/view`);
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

  useEffect(() => {}, []);

  const [isRelatorio, setIsRelatorio] = useState("NAO");

  return (
    <>
      {isLoading && <LoadingPage />}
      {isSuccess && (
        <Form role="form">
          <Row>
            <Col md="3">
              <FormGroup>
                <Label for="protocolo">
                  <i class="fa-solid fa-hashtag"></i> Protocolo
                </Label>
                <Input
                  id="protocolo"
                  name="protocolo"
                  value={protocolo}
                  type="text"
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md="2">
              <FormGroup>
                <Label for="data_ocorrencia">Data Ocorrencia</Label>
                <Input
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
                <Label for="naturezaFato">Natureza do Fato</Label>
                <Input id="naturezaFato" name="naturezaFato" type="select">
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
                <Label for="valor">Valor</Label>
                <Input
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
                <Label for="responsavel">Responsavel Tratativa</Label>
                <Input
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
                <Label for="inquerito_policial">
                  <i class="fa-solid fa-hashtag"></i> Inquerito Policial
                </Label>
                <Input
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
                <Label for="delegacia">D.P</Label>
                <Input
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
                <Label for="status">Status</Label>
                <Input id="status" name="status" type="select">
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
                <Label for="loja">Codigo Loja</Label>
                <Input
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
                <Label for="nome-loja">Nome</Label>
                <Input id="nome-loja" name="nome-loja" value="" type="text" />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label for="diretor-loja">Diretor</Label>
                <Input
                  id="diretor-loja"
                  name="diretor-loja"
                  value=""
                  type="text"
                />
              </FormGroup>
            </Col>

            <Col md="2">
              <FormGroup>
                <Label for="formato-loja">Formato</Label>
                <Input
                  id="formato-loja"
                  name="formato-loja"
                  value=""
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label for="bandeira-loja">Bandeira</Label>
                <Input
                  id="bandeira-loja"
                  name="bandeira-loja"
                  value=""
                  type="text"
                />
              </FormGroup>
            </Col>

            <Col md="2">
              <FormGroup>
                <Label for="cidade-loja">Cidade</Label>
                <Input
                  id="cidade-loja"
                  name="cidade-loja"
                  value=""
                  type="text"
                />
              </FormGroup>
            </Col>

            <Col md="1">
              <FormGroup>
                <Label for="uf-loja">U.F</Label>
                <Input id="uf-loja" name="uf-loja" value="" type="text" />
              </FormGroup>
            </Col>
          </Row>

          <Row></Row>
          <Row>
            <FormGroup>
              <Label for="observacao">Observacoes</Label>
              <Input
                id="observacao"
                name="observacao"
                placeholder="Descreva o ocorrido aqui ..."
                rows="3"
                type="textarea"
                value={observacao}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup row>
                <UploadImages id={protocolo} />
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
            <i className="fa-solid fa-check"></i> Cancelar
          </Button>
        </Form>
      )}
    </>
  );
};

export default Forms;
