import http from "../../http-common";

export function fetchNotaFiscal(props) {
  return http.get(`/api/nosso-corretor/notaFiscal/consultar/${props}`);
}
