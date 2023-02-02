import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge, Table } from "reactstrap";
import { useLojasMutation } from "../../app/api/lojasApiSlice";
import { useKeycloak } from "@react-keycloak/web";
import LoadingPage from "../../components/LoadingPage";
import { useOcorrenciasMutation } from "../../app/api/ocorrenciasApiSlice";

function List() {
  const { keycloak } = useKeycloak();

  const [ocorrencias, { data, error, isLoading, isFetching, isSuccess }] =
    useOcorrenciasMutation();

  useEffect(() => {
    const get = async () => {
      await ocorrencias();
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
              <th scope="col">Profissional</th>
              <th scope="col">UF</th>
              <th scope="col">Loja</th>
              <th scope="col">Responsável</th>
              <th className="text-center" scope="col">
                STATUS
              </th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Weberson Designer</td>
              <td> SP </td>
              <td>CRFSAOPAULO3</td>
              <td>Almir Peixoto Madureira</td>
              <td className="text-center">
                <Badge color="success" className="badge-dot px-2 text-white">
                  Concluido
                </Badge>
              </td>

              <td>
                <Link to={`/admin/ocorrencias/${1}/view`}>
                  <i className="fa-solid fa-eye text-dark icones-acao"></i>
                </Link>
                {keycloak?.hasResourceRole("manager") && (
                  <>
                    <Link to={`/admin/ocorrencias/${1}/edit`}>
                      <i className="fa-solid fa-pen-to-square text-primary icones-acao"></i>
                    </Link>
                    <i className="fa-solid fa-trash-can text-danger icones-acao"></i>
                  </>
                )}
              </td>
            </tr>
          </tbody>
        </>
      )}
    </Table>
  );
}

export default List;
