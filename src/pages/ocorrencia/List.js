import { useEffect, useRef, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { Badge, Button, Col, Container, Row } from "reactstrap";

import LoadingPage from "components/LoadingPage";
import ReactBSAlert from "react-bootstrap-sweetalert";
import { useNavigate } from "react-router-dom";
import { useDeleteOcorrenciaMutation } from "app/api/ocorrencia/ocorrenciaApiSlice";
import { useGetOcorrenciasMutation } from "app/api/ocorrencia/ocorrenciaApiSlice";

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

const { SearchBar, ClearSearchButton } = Search;

const List = () => {
  const [alert, setAlert] = useState(null);
  const componentRef = useRef(null);
  const navigate = useNavigate();
  const [getOcorrencias, { isLoading, isSuccess }] =
    useGetOcorrenciasMutation();

  const [deleteOcorrencia] = useDeleteOcorrenciaMutation();

  const [ocorrencias, setOcorrencias] = useState([]);

  useEffect(() => {
    getOcorrencias().then((x) => setOcorrencias(x.data));
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
    await deleteOcorrencia(id).then(() =>
      setOcorrencias((naturezas) => naturezas.filter((x) => x.id !== id))
    );

    setAlert(null);
  }

  function statusFormatter(cell, row, rowIndex, formatExtraData) {
    return (
      <>
        <Badge className="badge-dot mr-4" color="">
          <i
            className={
              row.status === "andamento"
                ? `bg-info`
                : row.status === "encerrado"
                ? `bg-success`
                : `bg-warning`
            }
          />
          <span className="status">{row.status}</span>
        </Badge>
      </>
    );
  }

  function actionFormatter(cell, row, rowIndex, formatExtraData) {
    return (
      <>
        <Button
          className="btn-icon"
          color="success"
          type="button"
          size="sm"
          onClick={() => navigate(`/admin/ocorrencias/${row.id}/view`)}
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
          onClick={() => navigate(`/admin/ocorrencias/${row.id}/edit`)}
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
            data={ocorrencias}
            keyField="name"
            columns={[
              {
                dataField: "id",
                text: "ID",
                sort: true,
              },
              {
                dataField: "protocolo",
                text: "Protocolo",
                sort: true,
              },
              {
                dataField: "inquerito_policial",
                text: "Inquerito Policial",
                sort: true,
              },

              {
                dataField: "data_ocorrencia",
                text: "Data Ocorrencia",
                sort: true,
              },

              {
                dataField: "data_encerramento",
                text: "Data Encerramento",
                sort: true,
              },

              {
                dataField: "loja.nome",
                text: "Loja",
                sort: true,
              },

              {
                dataField: "loja.uf",
                text: "UF",
                sort: true,
              },

              {
                dataField: "Colaborador",
                text: "colaborador",
                sort: true,
              },

              {
                text: "Status",
                sort: true,
                formatter: statusFormatter,
              },

              {
                dataField: "responsavel",
                text: "Responsavel",
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
              <div className="py-4 table-responsive">
                <div
                  id="datatable-basic_filter"
                  className="dataTables_filter px-0 pb-1 float-left"
                >
                  <label>
                    Procurar:
                    <SearchBar
                      className="form-control-sm"
                      placeholder="digite aqui"
                      {...props.searchProps}
                    />
                  </label>{" "}
                  {}
                  <ClearSearchButton {...props.searchProps} />
                </div>

                <BootstrapTable
                  striped
                  hover
                  condensed
                  ref={componentRef}
                  {...props.baseProps}
                  bootstrap4={true}
                  pagination={pagination}
                  bordered={false}
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
