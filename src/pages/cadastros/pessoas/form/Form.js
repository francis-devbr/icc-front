import { useKeycloak } from "@react-keycloak/web";
import { useAddNaturezaMutation } from "app/api/naturezaFatoApiSlice";
import { useGetNaturezaMutation } from "app/api/naturezaFatoApiSlice";
import LoadingPage from "components/LoadingPage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const Forms = (props) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  const [getNatureza, { isLoading }] = useGetNaturezaMutation();

  const [addNatureza] = useAddNaturezaMutation();

  const [pessoa, setPessoa] = useState({ id: null, nome: "" });

  const { nome, cpf, statusPessoa } = pessoa;

  useEffect(() => {
    if (props?.id) {
      const get = async () => {
        const response = await getNatureza({ id: props.id });
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
    const values = [nome];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const data = {
        nome,
        cpf,
        statusPessoa,
      };

      await addNatureza(data).then((r) => {
        setPessoa((prevState) => ({
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
            <Col md="3">
              <FormGroup>
                <Label for="nomeLoja">Nome Completo</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Digite o nome completo"
                  value={nome}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label for="nomeLoja">CPF</Label>
                <Input
                  id="cpf"
                  name="cpf"
                  type="text"
                  placeholder="Ex: 000.000.000-00"
                  value={cpf}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label for="nomeLoja">STATUS</Label>
                <Input
                  id="statusPessoa"
                  name="statusPessoa"
                  type="select"
                  value={statusPessoa}
                  onChange={handleInputChange}
                >
                  <option>Selecione a opção</option>
                  <option>Fornecedor</option>
                  <option>Funcionário</option>
                  <option>Ex Funcionário</option>
                  <option>Colaborador</option>
                  <option>Externo</option>
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
                  navigate(`/admin/naturezas/${nome}/edit`);
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
