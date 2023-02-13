import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import { useGetLojasMutation } from "app/api/lojasApiSlice";
import { useKeycloak } from "@react-keycloak/web";
import LoadingPage from "components/LoadingPage";

function List() {
  const { keycloak } = useKeycloak();
  const [lojas, { data, error, isLoading, isFetching, isSuccess }] =
    useGetLojasMutation();

  useEffect(() => {
    const get = async () => {
      await lojas();
    };

    get();
  }, []);

  return (
    <Table className="align-items-center table-flush" responsive hover>
      {isLoading && <LoadingPage />}
      {isSuccess && (
        <>
          <thead className="thead-light">
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Nome Unidade</th>
              <th scope="col">Codigo</th>
              <th scope="col">Endereço</th>
              <th scope="col">UF</th>
              <th scope="col">Responsável</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((loja) => (
              <tr key={loja.id}>
                <th scope="row">{loja.id}</th>
                <td>{loja.nome}</td>
                <td> CRFSAOPAULO3 </td>
                <td>Avenida Morvan Dias de Figueiredo, 3177</td>
                <td> SP </td>
                <td>Almir Peixoto Madureira</td>

                <td>
                  <Link to={`/admin/lojas/${loja.id}/view`}>
                    <i className="fa-solid fa-eye text-dark icones-acao"></i>
                  </Link>
                  {keycloak?.hasResourceRole("manager") && (
                    <>
                      <Link to={`/admin/lojas/${loja.id}/edit`}>
                        <i className="fa-solid fa-pen-to-square text-primary icones-acao"></i>
                      </Link>
                      <i className="fa-solid fa-trash-can text-danger icones-acao"></i>
                    </>
                  )}
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
