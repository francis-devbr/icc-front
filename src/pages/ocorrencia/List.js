import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { useKeycloak } from "@react-keycloak/web";
import LoadingPage from "components/LoadingPage";

import { toast } from "react-toastify";
import { useDeleteOcorrenciaMutation, useGetOcorrenciasMutation } from "app/api/ocorrencia/ocorrenciaApiSlice";

function List() {
  const { keycloak } = useKeycloak();

  const [getOcorrencias, { data, error, isLoading, isFetching, isSuccess }] =
    useGetOcorrenciasMutation();

  const [deleteOcorrencia] = useDeleteOcorrenciaMutation();

  const [ocorrencias, setOcorrencias] = useState(null);

  useEffect(() => {
    getOcorrencias().then((x) => setOcorrencias(x.data));
  }, []);

  async function remove(id) {
    await toast
      .promise(deleteOcorrencia(id), {
        pending: "Apagando...",
        success: "Registro Excluido...",
        error: "Erro ao Excluir",
      })
      .then(() =>
        setOcorrencias((naturezas) => naturezas.filter((x) => x.id !== id))
      );
  }

  return (
    <Table className="align-items-center table-flush" responsive hover>
      {isLoading && <LoadingPage />}
      {isSuccess && (
        <>
          <thead className="thead-light">
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Protocolo</th>
              <th scope="col">Inquerito Policial</th>
              <th scope="col">Data Ocorrencia</th>
              <th scope="col">Data Encerramento</th>
              <th scope="col">Loja</th>
              <th scope="col">U.F</th>
              <th scope="col">Colaborador</th>
              <th scope="col">Status</th>
              <th scope="col">Responsavel</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {ocorrencias?.map((ocorrencia) => (
              <tr key={ocorrencia.id}>
                <th scope="row">{ocorrencia.id}</th>
                <td>{ocorrencia.protocolo}</td>
                <td>{}</td>
                <td>{ocorrencia.data_ocorrencia}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>
                  <Link to={`/admin/ocorrencias/${ocorrencia.id}/view`}>
                    <i className="fa-solid fa-eye text-dark icones-acao"></i>
                  </Link>
                  <Link to={`/admin/ocorrencias/${ocorrencia.id}/edit`}>
                    <i className="fa-solid fa-pen-to-square text-primary icones-acao"></i>
                  </Link>
                  <Button
                    onClick={() => remove(ocorrencia.id)}
                    className="btn btn-sm btn-danger btn-delete-user"
                  >
                    <span>Delete</span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </>
      )}
    </Table>
  );
}

export default List;
