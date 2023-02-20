import { useKeycloak } from "@react-keycloak/web";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactBSAlert from "react-bootstrap-sweetalert";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import {
  useAddFormatoMutation,
  useGetFormatoMutation,
} from "app/api/formatoLojaApiSlice";

import LoadingPage from "components/LoadingPage";

const Forms = (props) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  const [getFormato, { isLoading }] = useGetFormatoMutation();

  const [addFormato] = useAddFormatoMutation();

  const [formato, setFormato] = useState({ id: null, nome: "" });

  const { id, nome } = formato;

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
          navigate(`/admin/formatos`);
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
        const response = await getFormato({ id: props.id });
        setFormato(response.data);
      };
      get();
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormato((prevState) => ({
      ...prevState,
      [name]: value.toUpperCase(),
    }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    await addFormato(formato)
      .then((r) => {
        setFormato((prevState) => ({
          ...prevState,
          id: r.data.id,
        }));

        successAlert();
        //navigate(`/admin/formatos`);
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
            
            <Col>
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
          </Row>
          <hr />

          {props.acao === "view" ? (
            keycloak?.hasResourceRole("manager") && (
              <Button
                color="primary"
                className="btn  mb-2 w-25"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/admin/formatos/${id}/edit`);
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
              navigate("/admin/formatos");
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
