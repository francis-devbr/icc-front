import { useKeycloak } from "@react-keycloak/web";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactBSAlert from "react-bootstrap-sweetalert";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import {
  useAddNaturezaMutation,
  useGetNaturezaMutation,
} from "app/api/naturezaFatoApiSlice";

import LoadingPage from "components/LoadingPage";

const Forms = (props) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  const [getNatureza, { isLoading }] = useGetNaturezaMutation();

  const [addNatureza] = useAddNaturezaMutation();

  const [natureza, setNatureza] = useState({ id: null, nome: "" });

  const { id, nome } = natureza;

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
        onConfirm={() => setAlert(null)}
        onCancel={() => setAlert(null)}
        timeout={2000}
        showConfirm={false}
      ></ReactBSAlert>
    );
  };

  useEffect(() => {
    if (props?.id) {
      const get = async () => {
        const response = await getNatureza({ id: props.id });
        setNatureza(response.data);
      };
      get();
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNatureza((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    await addNatureza(natureza)
      .then((r) => {
        setNatureza((prevState) => ({
          ...prevState,
          id: r.data.id,
        }));

        successAlert();
        navigate(`/admin/naturezas/${r.data.id}/view`);
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
                <Label for="id">
                  <i class="fa-solid fa-hashtag"></i> ID
                </Label>
                <Input
                  id="id"
                  name="id"
                  type="text"
                  value={id}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="11">
              <FormGroup>
                <Label for="nome">Nome</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  value={nome}
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
                  navigate(`/admin/naturezas/${id}/edit`);
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
              navigate("/admin/naturezas");
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
