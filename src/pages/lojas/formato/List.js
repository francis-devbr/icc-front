import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Table } from "reactstrap";
import {
  useDeleteFormatoMutation,
  useGetFormatosMutation,
} from "../../../app/api/formatoLojaApiSlice";
import LoadingPage from "../../../components/LoadingPage";

const List = (props) => {

  const [getFormatos, { isLoading, isSuccess }] = useGetFormatosMutation();

  const [formatos, setFormatos] = useState(null);

  const [deleteFormato] = useDeleteFormatoMutation();

  useEffect(() => {
    getFormatos().then((x) => setFormatos(x.data));
  }, []);

  async function remove(id) {
    await toast
      .promise(deleteFormato(id), {
        pending: "Apagando...",
        success: "Registro Excluido...",
        error: "Erro ao Excluir",
      })
      .then(() =>
        setFormatos((formatos) => formatos.filter((x) => x.id !== id))
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
              <th scope="col">Nome</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {formatos?.map((formato) => (
              <tr key={formato.id}>
                <th scope="row">{formato.id}</th>
                <td>{formato.nome}</td>
                <td>
                  <Link to={`/admin/formatos/${formato.id}/view`}>
                    <i className="fa-solid fa-eye text-dark icones-acao"></i>
                  </Link>
                  <Link to={`/admin/formatos/${formato.id}/edit`}>
                    <i className="fa-solid fa-pen-to-square text-primary icones-acao"></i>
                  </Link>
                  <button
                    onClick={() => remove(formato.id)}
                    className="btn btn-sm btn-danger btn-delete-user"
                  >
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </>
      )}
    </Table>
  );
};

export default List;
