import Index from "./views/Index";

import TodasOcorrencias from "./views/TodasOcorrencias";
import EditCadastroOcorrencia from "./views/EditCadastroOcorrencia";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    element: <Index />,
    layout: "/admin",
    showSidebar: true,
  },
  {
    path: "/todas-ocorrencias",
    name: "Todas as Ocorrências",
    icon: "ni ni-folder-17 text-primary",
    element: <TodasOcorrencias />,
    layout: "/admin",
    showSidebar: true,
  },
  {
    path: "/edit-cadastro-ocorrencia",
    name: "Editar Cadastro de Ocorrência",
    icon: "ni ni-folder-17 text-primary",
    element: <EditCadastroOcorrencia />,
    layout: "/admin",
    showSidebar: false,
  },
];
export default routes;
