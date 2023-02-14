import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Row,
  Table,
  UncontrolledTooltip,
} from "reactstrap";
import {
  useDeleteNaturezaMutation,
  useGetNaturezasMutation,
} from "app/api/naturezaFatoApiSlice";

import LoadingPage from "components/LoadingPage";
import ReactBSAlert from "react-bootstrap-sweetalert";
import { dataTable } from "variables/general";

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
  const [naturezas, setNaturezas] = useState([]);
  const [show, setShow] = useState(false);
  const componentRef = useRef(null);

  const [getNaturezas, { isLoading, isSuccess }] = useGetNaturezasMutation();
  const [deleteNatureza] = useDeleteNaturezaMutation();

  useEffect(() => {
    getNaturezas().then((x) => setNaturezas(x.data));
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
    await deleteNatureza(id).then(() =>
      setNaturezas((naturezas) => naturezas.filter((x) => x.id !== id))
    );

    setAlert(null);
  }

  function actionFormatter(cell, row, rowIndex, formatExtraData) {
    return (
      <>
        <Link to={`/admin/naturezas/${row.id}/view`}>
          <i className="fa-solid fa-eye text-dark icones-acao"></i>
        </Link>
        <Link to={`/admin/naturezas/${row.id}/edit`}>
          <i className="fa-solid fa-pen-to-square text-primary icones-acao"></i>
        </Link>
        <button
          onClick={() => removeAlert(row.id)}
          
        >
          <i className="fa-solid fa-trash-alt text-danger icones-acao"></i>
        </button>
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
            data={naturezas}
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
