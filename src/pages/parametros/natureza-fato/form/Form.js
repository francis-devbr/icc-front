import { useKeycloak } from "@react-keycloak/web";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useAddNaturezaMutation, useGetNaturezaMutation } from "../../../../app/api/naturezaFatoApiSlice";

import LoadingPage from "../../../../components/LoadingPage";

const Forms = (props) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  const [getNatureza, { isLoading }] = useGetNaturezaMutation();

  const [addNatureza] = useAddNaturezaMutation();

  const [natureza, setNatureza] = useState({ id: null, nome: "" });

  const { id, nome } = natureza;

  useEffect(() => {
    if (props?.id) {
      const get = async () => {
        const response = await getNatureza({ id: props.id });
        setNatureza({ id: response.data.id, nome: response.data.nome });
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
    const values = [nome];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const data = {
        id,
        nome,
      };

      await toast
        .promise(addNatureza(data), {
          pending: "Salvando...",
          success: "Natureza Salvo...",
          error: "Erro ao Salvar",
        })
        .then((r) => {
          setNatureza((prevState) => ({
            ...prevState,
            id: r.data.id,
          }));
          navigate(`/admin/naturezas/${r.data.id}/view`);
        });
    } else {
      errorMsg = "Please fill out all the fields.";
      toast(errorMsg);
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
            <i className="fa-solid fa-check"></i> Cancelar
          </Button>
        </Form>
      )}
    </>
  );
};

export default Forms;
