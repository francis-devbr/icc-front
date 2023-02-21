import { useEffect, useRef, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { Button, Col, Container, Row } from "reactstrap";
import {
  useDeletePessoaMutation,
  useGetPessoasMutation,
} from "app/api/pessoaApiSlice";

import LoadingPage from "components/LoadingPage";
import ReactBSAlert from "react-bootstrap-sweetalert";
import { useNavigate } from "react-router-dom";

const pagination = paginationFactory({
  page: 1,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  sizePerPageRenderer: ({ onSizePerPageChange }) => (
    <div className="dataTables_length" id="datatable-basic_length">
      <label>
        {
          <select
            name="datatable-basic_length"
            aria-controls="datatable-basic"
            className="form-control form-control-sm"
            onChange={(e) => onSizePerPageChange(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        }
      </label>
    </div>
  ),
});

const { SearchBar } = Search;

const List = () => {
  const [alert, setAlert] = useState(null);
  const [pessoas, setPessoas] = useState([]);
  const [show, setShow] = useState(false);
  const componentRef = useRef(null);
  const navigate = useNavigate();
  const [getPessoas, { isLoading, isSuccess }] = useGetPessoasMutation();
  const [deletePessoa] = useDeletePessoaMutation();

  useEffect(() => {
    getPessoas().then((x) => setPessoas(x.data));
  }, []);

  const removeAlert = (id) => {
    setAlert(
      <ReactBSAlert
        danger
        style={{ display: "block", marginTop: "-100px" }}
        title="Deseja Excluir o Registro?!"
        onConfirm={() => setAlert(null)}
        onCancel={() => remove(id)}
        showCancel
        confirmBtnBsStyle="secondary"
        confirmBtnText="Cancelar"
        cancelBtnBsStyle="danger"
        cancelBtnText="Sim, apague isso!"
        btnSize=""
      >
        Você não será capaz de reverter isso!
      </ReactBSAlert>
    );
  };

  async function remove(id) {
    await deletePessoa(id).then(() =>
      setPessoas((pessoas) => pessoas.filter((x) => x.id !== id))
    );

    setAlert(null);
  }

  function actionFormatter(cell, row, rowIndex, formatExtraData) {
    return (
      <>
        <Button
          className="btn-icon"
          color="success"
          type="button"
          size="sm"
          onClick={() => navigate(`/admin/pessoas/${row.id}/view`)}
        >
          <span className="btn-inner--icon">
            <i className="fa-solid fa-eye" />
          </span>
        </Button>

        <Button
          className="btn-icon"
          color="primary"
          type="button"
          size="sm"
          onClick={() => navigate(`/admin/pessoas/${row.id}/edit`)}
        >
          <span className="btn-inner--icon">
            <i className="fa-solid fa-pen-to-square" />
          </span>
        </Button>

        <Button
          className="btn-icon"
          color="danger"
          type="button"
          size="sm"
          onClick={() => removeAlert(row.id)}
        >
          <span className="btn-inner--icon">
            <i className="fa-solid fa-trash-alt" />
          </span>
        </Button>
      </>
    );
  }

  return (
    <>
      {alert}

      {isLoading && <LoadingPage />}
      {isSuccess && (
        <>
          <ToolkitProvider
            data={pessoas}
            keyField="name"
            columns={[
              {
                dataField: "id",
                text: "ID",
                sort: true,
              },
              {
                dataField: "nome",
                text: "Nome",
                sort: true,
              },

              {
                isDummyField: true,
                sort: false,
                formatter: actionFormatter,
              },
            ]}
            search
          >
            {(props) => (
              <div className="py-4">
                <Container fluid>
                  <Row>
                    <Col>
                      <div
                        id="datatable-basic_filter"
                        className="dataTables_filter px-0 pb-1 float-left"
                      >
                        <label>
                          Procurar:
                          <SearchBar
                            className="form-control-sm"
                            placeholder="Nome"
                            {...props.searchProps}
                          />
                        </label>
                      </div>
                    </Col>
                  </Row>
                </Container>
                <BootstrapTable
                  striped
                  hover
                  condensed
                  ref={componentRef}
                  {...props.baseProps}
                  bootstrap4={true}
                  pagination={pagination}
                  bordered={false}
                  id="react-bs-table"
                  noDataIndication="Nenhum dado encontrado"
                />
              </div>
            )}
          </ToolkitProvider>
        </>
      )}
    </>
  );
};

export default List;
