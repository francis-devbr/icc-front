import { useKeycloak } from "@react-keycloak/web";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactBSAlert from "react-bootstrap-sweetalert";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import {
  useAddPessoaMutation,
  useGetPessoaMutation,
} from "app/api/pessoaApiSlice";

import LoadingPage from "components/LoadingPage";

const Forms = (props) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  const [getPessoa, { isLoading }] = useGetPessoaMutation();

  const [addPessoa] = useAddPessoaMutation();

  const [pessoa, setPessoa] = useState({ id: null, nome: "" });

  const { id, nome } = pessoa;

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
          navigate(`/admin/pessoas`);
        }}
        onCancel={() => setAlert(null)}
        timeout={2000}
        showConfirm={false}
      ></ReactBSAlert>
    );
  };

  useEffect(() => {
    if (props?.id) {
      const get = async () => {
        const response = await getPessoa({ id: props.id });
        setPessoa(response.data);
      };
      get();
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPessoa((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    await addPessoa(pessoa)
      .then((r) => {
        setPessoa((prevState) => ({
          ...prevState,
          id: r.data.id,
        }));

        successAlert();
        //navigate(`/admin/pessoas`);
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
                <Label className="form-control-label"  for="id">
                  <i class="fa-solid fa-hashtag"></i> ID
                </Label>
                <Input
                  className="form-control"
                  id="id"
                  name="id"
                  type="text"
                  value={id}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="8">
              <FormGroup>
                <Label className="form-control-label" for="nome">
                  Nome
                </Label>
                <Input
                  className="form-control"
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
                <Label className="form-control-label" for="naturezaFato">
                  Papel
                </Label>
                <Input
                  className="form-control"
                  id="papel"
                  name="papel"
                  type="select"
                >
                  <option>Selecione a opção</option>
                </Input>
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
                  navigate(`/admin/pessoas/${id}/edit`);
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
              navigate("/admin/pessoas");
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
