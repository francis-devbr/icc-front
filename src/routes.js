import Grupo from "./views/Grupo";
import Index from "./views/Index";
import Liberacao from "./views/Liberacao";
import TodasOcorrencias from "./views/TodasOcorrencias";
import EditCadastroOcorrencia from "./views/EditCadastroOcorrencia";
import TodasLojas from "./views/TodasLojas";
import EditLoja from "./views/EditLoja";
import MNPEX from "./views/MNPEX";
import NotaFiscal from "./views/NotaFiscal";
import Relatorios from "./views/Relatorios";
import Resgate from "./views/Resgate";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    element: <Index />,
    layout: "/admin",
  },
  {
    path: "/todas-ocorrencias",
    name: "Todas as Ocorrências",
    icon: "ni ni-folder-17 text-primary",
    element: <TodasOcorrencias />,
    layout: "/admin",
  },
  {
    path: "/edit-cadastro-ocorrencia",
    name: "Editar Cadastro de Ocorrência",
    icon: "ni ni-folder-17 text-primary",
    element: <EditCadastroOcorrencia />,
    layout: "/admin",
  },
  {
    path: "/todas-lojas",
    name: "Todas as Lojas",
    icon: "fa-solid fa-store text-danger",
    element: <TodasLojas />,
    layout: "/admin",
  },
  {
    path: "/editar-loja",
    name: "Editar as Loja",
    icon: "fa-solid fa-store text-danger",
    element: <EditLoja />,
    layout: "/admin",
  }

  
];
export default routes;
