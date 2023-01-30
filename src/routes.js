import Index from "./pages/Index";

import Lojas from "./pages/loja/Lojas";
import Loja from "./pages/loja/Loja";
import Ocorrencias from "./pages/Ocorrencias";
import Ocorrencia from "./pages/Ocorrencia";

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
    path: "/ocorrencias",
    name: "Todas as Ocorrências",
    icon: "ni ni-folder-17 text-primary",
    element: <Ocorrencias />,
    layout: "/admin",
    showSidebar: true,
  },
  {
    path: "/ocorrencias/:id/:acao",
    name: "Editar Cadastro de Ocorrência",
    icon: "ni ni-folder-17 text-primary",
    element: <Ocorrencia />,
    layout: "/admin",
    showSidebar: false,
  },
  {
    path: "/lojas",
    name: "Lojas",
    icon: "ni ni-folder-17 text-primary",
    element: <Lojas />,
    layout: "/admin",
    showSidebar: true,
  },

  {
    path: "/lojas/:id/:acao",
    name: "Editar Cadastro de Ocorrência",
    icon: "ni ni-folder-17 text-primary",
    element: <Loja />,
    layout: "/admin",
    showSidebar: false,
  },

  {
    path: "/lojas/:acao",
    name: "Editar Cadastro de Ocorrência",
    icon: "ni ni-folder-17 text-primary",
    element: <Loja />,
    layout: "/admin",
    showSidebar: false,
  },
];
export default routes;
