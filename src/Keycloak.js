import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "http://34.148.171.98/auth",
  realm: "icc",
  clientId: process.env.REACT_APP_BASE_URL_KEYCLOAK_CLIENT,
});

export default keycloak;
