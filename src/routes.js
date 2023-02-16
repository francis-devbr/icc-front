import Formato from "pages/cadastros/formato/Formato";
import Formatos from "pages/cadastros/formato/Formatos";
import Natureza from "pages/cadastros/natureza-fato/NaturezaFato";
import NaturezaFatos from "pages/cadastros/natureza-fato/NaturezaFatos";
import Pessoa from "pages/cadastros/pessoas/Pessoa";
import Pessoas from "pages/cadastros/pessoas/Pessoas";
import Delegacia from "pages/cadastros/delegacias/Delegacia";
import Delegacias from "pages/cadastros/delegacias/Delegacias";
import Loja from "pages/lojas/Loja";
import Lojas from "pages/lojas/Lojas";
import Ocorrencia from "pages/ocorrencia/Ocorrencia";
import Ocorrencias from "pages/ocorrencia/Ocorrencias";
import OcorrenciasInterna from "pages/ocorrencias-internas/OcorrenciasInterna";
import OcorrenciasInternas from "pages/ocorrencias-internas/OcorrenciasInternas";
import Index from "pages/Index";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-chart-bar-32 text-primary",
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
    path: "/lojas/:id/:acao",
    name: "Editar Cadastro de Loja",
    icon: "fa-solid fa-store text-primary",
    element: <Loja />,
    layout: "/admin",
    showSidebar: false,
  },

  {
    path: "/lojas/:acao",
    name: "Editar Cadastro de Loja",
    icon: "fa-solid fa-store text-primary",
    element: <Loja />,
    layout: "/admin",
    showSidebar: false,
  },

  {
    path: "/formatos/:id/:acao",
    name: "Editar Cadastro de Foramto Loja",
    icon: "fas fa-store-slash text-primary",
    element: <Formato />,
    layout: "/admin",
    showSidebar: false,
  },

  {
    path: "/formatos/:acao",
    name: "Editar Cadastro de Formato Loja",
    icon: "fas fa-store-slash text-primary",
    element: <Formato />,
    layout: "/admin",
    showSidebar: false,
  },

  {
    path: "/naturezas/:id/:acao",
    name: "Editar Cadastro de Naturezas Fato",
    icon: "ni ni-book-bookmark text-primary",
    element: <Natureza />,
    layout: "/admin",
    showSidebar: false,
  },

  {
    path: "/naturezas/:acao",
    name: "Editar Cadastro de Naturezas Fato",
    icon: "ni ni-book-bookmark text-primary",
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

  {
    path: "/pessoas/:id/:acao",
    name: "Editar Cadastro de Pessoas",
    icon: "ni ni-circle-08 text-primary",
    element: <Pessoa />,
    layout: "/admin",
    showSidebar: false,
  },

  {
    path: "/pessoas/:acao",
    name: "Editar Cadastro de Pessoas",
    icon: "ni ni-circle-08 text-primary",
    element: <Pessoa />,
    layout: "/admin",
    showSidebar: false,
  },
  {
    path: "/delegacias/:id/:acao",
    name: "Editar Cadastro de Delegacias",
    icon: "fas fa-user-secret text-primary",
    element: <Delegacia />,
    layout: "/admin",
    showSidebar: false,
  },

  {
    path: "/delegacias/:acao",
    name: "Editar Cadastro de Delegacias",
    icon: "fas fa-user-secret text-primary",
    element: <Delegacia />,
    layout: "/admin",
    showSidebar: false,
  },

  {
    path: "/cadastro-geral",
    collapse: true,
    name: "Cadastro Geral",
    icon: "fas fa-clipboard-check text-primary",
    state: "cadastrosCollapse",
    showSidebar: true,
    views: [
      {
        path: "/pessoas",
        name: "Pessoas",
        miniName: "P",
        element: <Pessoas />,
        layout: "/admin",
      },

      {
        path: "/naturezas",
        name: "Natureza Fato",
        miniName: "N",
        element: <NaturezaFatos />,
        layout: "/admin",
      },
      {
        path: "/formatos",
        name: "Formato Loja",
        miniName: "F",
        element: <Formatos />,
        layout: "/admin",
      },

      {
        path: "/lojas",
        name: "Lojas",
        miniName: "L",
        element: <Lojas />,
        layout: "/admin",
      },

      {
        path: "/delegacias",
        name: "Delegacias",
        miniName: "L",
        element: <Delegacias />,
        layout: "/admin",
      },
    ],
  },
];
export default routes;
