import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "http://34.148.171.98/auth",
  realm: "icc",
  clientId: "react-icc-client",
});

export default keycloak;
