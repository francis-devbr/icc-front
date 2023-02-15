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
import Pessoas from "./pages/pessoas/Pessoas";
import Pessoa from "./pages/pessoas/Pessoa";
import CadastrosGerais from "./pages/cadastro-geral/CadastrosGerais";
import Delegacia from "./pages/delegacias/Delegacia";
import Delegacias from "./pages/delegacias/Delegacias";

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
    path: "/lojas",
    name: "Lojas",
    icon: "fa-solid fa-store text-primary",
    element: <Lojas />,
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
    path: "/formatos",
    name: "Formato Loja",
    icon: "fas fa-store-slash text-primary",
    element: <Formatos />,
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
    path: "/naturezas",
    name: "Natureza Fato",
    icon: "ni ni-book-bookmark text-primary",
    element: <NaturezaFatos />,
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
    path: "/pessoas",
    name: "Pessoas",
    icon: "ni ni-circle-08 text-primary",
    element: <Pessoas />,
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
    path: "/delegacias",
    name: "Delegacias",
    icon: "fas fa-user-secret text-primary",
    element: <Delegacias />,
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
    name: "Cadastro Geral",
    icon: "fas fa-clipboard-check text-primary",
    element: <CadastrosGerais />,
    layout: "/admin",
    showSidebar: true,
  },




];
export default routes;
