import Index from "./views/Index";

import TodasOcorrencias from "./views/TodasOcorrencias";
import EditCadastroOcorrencia from "./views/EditCadastroOcorrencia";
import TodasLojas from "./views/TodasLojas";
import EditCadastroLoja from "./views/EditCadastroLoja";

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
    path: "/ocorrencia/:id/:acao",
    name: "Editar Cadastro de Ocorrência",
    icon: "ni ni-folder-17 text-primary",
    element: <EditCadastroOcorrencia />,
    layout: "/admin",
    showSidebar: false,
  },
  {
    path: "/todas-lojas",
    name: "Todas as Lojas",
    icon: "ni ni-folder-17 text-primary",
    element: <TodasLojas />,
    layout: "/admin",
    showSidebar: true,
  },

  {
    path: "/loja/:id/:acao",
    name: "Editar Cadastro de Ocorrência",
    icon: "ni ni-folder-17 text-primary",
    element: <EditCadastroLoja />,
    layout: "/admin",
    showSidebar: false,
  },
];
export default routes;