import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Table } from "reactstrap";
import {
  useDeleteNaturezaMutation,
  useGetNaturezasMutation,
} from "app/api/naturezaFatoApiSlice";

import LoadingPage from "components/LoadingPage";
import ReactBSAlert from "react-bootstrap-sweetalert";

const List = (props) => {
  const [getNaturezas, { isLoading, isSuccess }] = useGetNaturezasMutation();

  const [naturezas, setNaturezas] = useState(null);

  const [deleteNatureza] = useDeleteNaturezaMutation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    getNaturezas().then((x) => setNaturezas(x.data));
  }, []);

  const [alert, setAlert] = useState(null);

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

  return (
    <>
      {alert}
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
              {naturezas?.map((natureza) => (
                <tr key={natureza.id}>
                  <th scope="row">{natureza.id}</th>
                  <td>{natureza.nome}</td>
                  <td>
                    <Link to={`/admin/naturezas/${natureza.id}/view`}>
                      <i className="fa-solid fa-eye text-dark icones-acao"></i>
                    </Link>
                    <Link to={`/admin/naturezas/${natureza.id}/edit`}>
                      <i className="fa-solid fa-pen-to-square text-primary icones-acao"></i>
                    </Link>
                    <button
                      onClick={() => removeAlert(natureza.id)}
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
    </>
  );
};

export default List;
