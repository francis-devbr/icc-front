import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Table } from "reactstrap";
import { useDeleteNaturezaMutation, useGetNaturezasMutation } from "../../app/api/naturezaFatoApiSlice";


import LoadingPage from "../../components/LoadingPage";

const List = (props) => {

  const [getNaturezas, { isLoading, isSuccess }] = useGetNaturezasMutation();

  const [naturezas, setNaturezas] = useState(null);

  const [deleteNatureza] = useDeleteNaturezaMutation();

  useEffect(() => {
    getNaturezas().then((x) => setNaturezas(x.data));
  }, []);

  async function remove(id) {
    await toast
      .promise(deleteNatureza(id), {
        pending: "Apagando...",
        success: "Ocorrência Excluida...",
        error: "Erro ao Excluir",
      })
      .then(() =>
        setNaturezas((naturezas) => naturezas.filter((x) => x.id !== id))
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
              <th scope="col">Case Principal</th>
              <th scope="col">Cod Loja</th>
              <th scope="col">Região</th>
              <th scope="col">Status</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>
          <tbody>
            {naturezas?.map((natureza) => (
              <tr key={natureza.id}>
                <th scope="row">{natureza.id}</th>
                <td>{natureza.nome}</td>
                <td>{natureza.nome}</td>
                <td>{natureza.nome}</td>
                <td>{natureza.nome}</td>
                <td>
                  <Link to={`/admin/naturezas/${natureza.id}/view`}>
                    <i className="fa-solid fa-eye text-dark icones-acao"></i>
                  </Link>
                  <Link to={`/admin/naturezas/${natureza.id}/edit`}>
                    <i className="fa-solid fa-pen-to-square text-primary icones-acao"></i>
                  </Link>
                  <button
                    onClick={() => remove(natureza.id)}
                    className="btn btn-link px-0"
                  >
                     <i className="fa-solid fa-trash-alt text-danger icones-acao"></i>
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
