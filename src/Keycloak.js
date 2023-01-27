import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "https://homolog-play.dracards.com/auth",
  realm: "icc",
  clientId: "react-icc-client",
});

export default keycloak;
