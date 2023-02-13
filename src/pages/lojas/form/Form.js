import { useEffect, useState } from "react";

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
import {
  useAddLojaMutation,
  useGetLojaMutation,
} from "app/api/lojasApiSlice";
import { useGetCepMutation } from "app/api/cepApiSlice";
import { useNavigate } from "react-router-dom";

import { useGetUfsMutation } from "app/api/cep/ufApiSlice";
import { useGetFormatosMutation } from "app/api/formatoLojaApiSlice";
import { useKeycloak } from "@react-keycloak/web";

const Forms = (props) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  const [addLoja] = useAddLojaMutation();
  const [getCep] = useGetCepMutation();
  const [getLoja] = useGetLojaMutation();

  const [loja, setLoja] = useState({
    sigla: "",
    nome: "",
    formato: {},
    bandeira: {},
    cep: "",
    numero: "",
    complemento: "",
    logradouro: {
      id: 0,
      nome: "",
      complemento: "",
      bairro: {
        id: 0,
        nome: "",
        localidade: {
          id: 0,
          nome: "",
          uf: {
            id: 0,
            nome: "",
            sigla: "",
            regiao: {
              id: 0,
              nome: "",
            },
          },
        },
      },
    },
  });

  const { id, sigla, nome, formato, cep, numero, complemento, logradouro } =
    loja;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoja((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [getFormatos] = useGetFormatosMutation();

  const [getUfs] = useGetUfsMutation();

  const [formatos, setFormatos] = useState([]);

  const [regiao, setRegiao] = useState("");

  const [ufs, setUfs] = useState([]);
  const [uf, setUf] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [bairro, setBairro] = useState("");

  useEffect(() => {
    const formatosLoja = async () => {
      const r = await getFormatos();
      setFormatos(r.data);
    };

    formatosLoja();

    const ufs = async () => {
      const r = await getUfs();
      setUfs(r.data);
    };

    ufs();

    if (props?.id) {
      const get = async () => {
        const l = await loja({ id: props.id });

        setUf(l.data?.uf);
        setLocalidade(l.data?.localidade);
        setBairro(l.data?.bairro);
      };
      get();
    }
  }, []);

  useEffect(() => {
    ufs
      ?.filter((u) => u.sigla === uf)
      .map((filteredUF) => setRegiao(filteredUF.regiao.nome));
  }, [uf]);

  const postData = async (event) => {
    event.preventDefault();
    const l = await addLoja({ id: id, nome: nome });
  };

  const findByCEP = async (event) => {
    event.preventDefault();
    console.log(cep);
    const l = await getCep(cep);
    setUf(l.data?.uf);
    setLocalidade(l.data.localidade);
    setBairro(l.data.bairro);
  };

  return (
    <>
      <Form role="form">
        <Row>
          <Col md="1">
            <FormGroup>
              <Label for="id">
                <i class="fa-solid fa-hashtag"></i> ID
              </Label>
              <Input
                id="id"
                name="id"
                type="text"
                value={id}
                onChange={(e) => handleInputChange}
              />
            </FormGroup>
          </Col>

          <Col md="3">
            <FormGroup>
              <Label for="formato">Formato</Label>

              <Input
                id="formato"
                name="formato"
                type="select"
                value={formato}
                onChange={(e) => handleInputChange}
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
              <Label for="bandeira">Bandeira</Label>
              <Input id="bandeira" name="bandeira" type="text" />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label for="unidade">Unidade</Label>
              <Input
                id="unidade"
                name="unidade"
                type="text"
                value={nome}
                onChange={(e) => handleInputChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <FormGroup>
              <Label for="responsavel">
                <i className="fa-solid fa-user-tie"></i> Responsável
              </Label>
              <Input id="responsavel" name="responsavel" type="text" />
            </FormGroup>
          </Col>
        </Row>
        <Row className="row-cols-lg-auto g-3 align-items-center">
          <Col md="3">
            <FormGroup>
              <Label for="logradouro">
                <i className="fa-solid fa-location-dot"></i> CEP
              </Label>
              <InputGroup>
                <Input
                  id="logradouro"
                  name="logradouro"
                  type="text"
                  value={cep}
                  onChange={(e) => handleInputChange}
                />
                <Button color="primary" onClick={(e) => findByCEP(e)}>
                  Pesquisar
                </Button>
              </InputGroup>
            </FormGroup>
          </Col>

          <Col md="5">
            <FormGroup>
              <Label for="logradouro">Logradouro</Label>
              <Input
                id="logradouro"
                name="logradouro"
                type="text"
                value={logradouro}
                onChange={(e) => handleInputChange}
              />
            </FormGroup>
          </Col>

          <Col md="1">
            <FormGroup>
              <Label for="numero">Numero</Label>
              <Input
                id="numero"
                name="numero"
                type="text"
                value={numero}
                onChange={(e) => handleInputChange}
              />
            </FormGroup>
          </Col>

          <Col md="3">
            <FormGroup>
              <Label for="numero">Complemento</Label>
              <Input
                id="numero"
                name="numero"
                type="text"
                value={complemento}
                onChange={(e) => handleInputChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <FormGroup>
              <Label for="bairro">Bairro</Label>
              <Input
                id="bairro"
                name="bairro"
                type="text"
                value={bairro}
                onChange={(e) => handleInputChange}
              />
            </FormGroup>
          </Col>

          <Col md="2">
            <FormGroup>
              <Label for="localidade">Localidade</Label>
              <Input
                id="localidade"
                name="localidade"
                type="text"
                value={localidade}
                onChange={(e) => handleInputChange}
              />
            </FormGroup>
          </Col>

          <Col md="2">
            <FormGroup>
              <Label for="uf">UF</Label>

              <Input
                id="uf"
                name="uf"
                type="select"
                value={uf}
                onChange={(e) => {
                  setUf(e.target.value);
                }}
              >
                <option></option>
                {ufs?.map((u) => (
                  <option key={u.id} value={u.sigla}>
                    {u.nome}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>

          <Col md="2">
            <FormGroup>
              <Label for="regiao">Regiao</Label>
              <Input
                id="regiao"
                name="regiao"
                type="text"
                value={regiao}
              ></Input>
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
              onClick={(e) => postData(e)}
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
    </>
  );
};

export default Forms;