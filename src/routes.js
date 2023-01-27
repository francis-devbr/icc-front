import Index from "./views/Index";

import MemoriaCalculo from "./views/MemoriaCalculo";

import NotaFiscal from "./views/NotaFiscal";

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
    path: "/memoria-calculo",
    name: "Memoria de Calculo",
    icon: "ni ni-money-coins text-primary",
    element: <MemoriaCalculo />,
    layout: "/admin",
  },
];
export default routes;
