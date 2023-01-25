import Grupo from "./views/Grupo";
import Index from "./views/Index";
import Liberacao from "./views/Liberacao";
import MemoriaCalculo from "./views/MemoriaCalculo";
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
    path: "/nota",
    name: "Nota Fiscal",
    icon: "fa fa-file-invoice-dollar text-primary",
    element: <NotaFiscal />,
    layout: "/admin",
  },

  {
    path: "/resgate",
    name: "Resgate",
    icon: "ni ni-satisfied text-primary",
    element: <Resgate />,
    layout: "/admin",
  },

  {
    path: "/grupo",
    name: "Grupo",
    icon: "fa fa-group-arrows-rotate text-primary",
    element: <Grupo />,
    layout: "/admin",
  },

  {
    path: "/liberacao",
    name: "Liberacao",
    icon: "fas fa-list-check text-primary",
    element: <Liberacao />,
    layout: "/admin",
  },

  {
    path: "/memoria-calculo",
    name: "Memoria de Calculo",
    icon: "ni ni-money-coins text-primary",
    element: <MemoriaCalculo />,
    layout: "/admin",
  },

  {
    path: "/mnpex-pe",
    name: "MNPEX Ponto Extra",
    icon: "ni ni-single-copy-04 text-primary",
    element: <MNPEX />,
    layout: "/admin",
  },
  {
    path: "/relatorios",
    name: "Relatorios",
    icon: "ni ni-chart-pie-35 text-primary",
    element: <Relatorios />,
    layout: "/admin",
  },
  {
    path: "/david",
    name: "David",
    icon: "ni ni-chart-pie-35 text-primary",
    element: <MNPEX />,
    layout: "/admin",
  },
];
export default routes;
