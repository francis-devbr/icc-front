import Index from "./pages/Index";

import Lojas from "./pages/loja/Lojas";
import Loja from "./pages/loja/Loja";
import Ocorrencias from "./pages/ocorrencia/Ocorrencias";
import Ocorrencia from "./pages/ocorrencia/Ocorrencia";
import Formatos from "./pages/lojas/formato/Formatos";
import Formato from "./pages/lojas/formato/Formato";
import NaturezaFatos from "./pages/parametros/natureza-fato/NaturezaFatos";
import Natureza from "./pages/parametros/natureza-fato/NaturezaFato";
import OcorrenciasInterna from "./pages/ocorrencias-internas/OcorrenciasInterna";
import OcorrenciasInternas from "./pages/ocorrencias-internas/OcorrenciasInternas";

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
    name: "Ocorrências",
    icon: "ni ni-folder-17 text-primary",
    element: <Ocorrencias />,
    layout: "/admin",
    showSidebar: true,
  },

  {
    path: "/ocorrencias/:acao",
    name: "Editar Cadastro de Ocorrência",
    icon: "ni ni-folder-17 text-primary",
    element: <Ocorrencia />,
    layout: "/admin",
    showSidebar: false,
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
    icon: "fa-solid fa-store text-primary",
    element: <Lojas />,
    layout: "/admin",
    showSidebar: true,
  },

  {
    path: "/lojas/:id/:acao",
    name: "Editar Cadastro de Loja",
    icon: "ni ni-folder-17 text-primary",
    element: <Loja />,
    layout: "/admin",
    showSidebar: false,
  },

  {
    path: "/lojas/:acao",
    name: "Editar Cadastro de Loja",
    icon: "ni ni-folder-17 text-primary",
    element: <Loja />,
    layout: "/admin",
    showSidebar: false,
  },

  {
    path: "/formatos",
    name: "Formato Loja",
    icon: "fa-solid fa-store text-primary",
    element: <Formatos />,
    layout: "/admin",
    showSidebar: true,
  },

  {
    path: "/formatos/:id/:acao",
    name: "Editar Cadastro de Foramto Loja",
    icon: "ni ni-folder-17 text-primary",
    element: <Formato />,
    layout: "/admin",
    showSidebar: false,
  },

  {
    path: "/formatos/:acao",
    name: "Editar Cadastro de Formato Loja",
    icon: "ni ni-folder-17 text-primary",
    element: <Formato />,
    layout: "/admin",
    showSidebar: false,
  },

  {
    path: "/naturezas",
    name: "Natureza Fato",
    icon: "fa-solid fa-store text-primary",
    element: <NaturezaFatos />,
    layout: "/admin",
    showSidebar: true,
  },

  {
    path: "/naturezas/:id/:acao",
    name: "Editar Cadastro de Naturezas Fato",
    icon: "ni ni-folder-17 text-primary",
    element: <Natureza />,
    layout: "/admin",
    showSidebar: false,
  },

  {
    path: "/naturezas/:acao",
    name: "Editar Cadastro de Naturezas Fato",
    icon: "ni ni-folder-17 text-primary",
    element: <Natureza />,
    layout: "/admin",
    showSidebar: false,
  },

  {
    path: "/ocorrencias-internas",
    name: "Ocorrencias Internas",
    icon: "ni ni-briefcase-24 text-primary",
    element: <OcorrenciasInternas />,
    layout: "/admin",
    showSidebar: true,
  },

  {
    path: "/ocorrencias-internas/:id/:acao",
    name: "Editar Cadastro de Ocorrencias Internas",
    icon: "ni ni-briefcase-24 text-primary",
    element: <OcorrenciasInterna />,
    layout: "/admin",
    showSidebar: false,
  },

  {
    path: "/ocorrencias-internas/:acao",
    name: "Editar Cadastro de Ocorrencias Internas",
    icon: "ni ni-briefcase-24 text-primary",
    element: <OcorrenciasInterna />,
    layout: "/admin",
    showSidebar: false,
  },
];
export default routes;
