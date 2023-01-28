import React, { useEffect, useState } from "react";
import PrivateRoute from "./layout/PrivateRoute";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLayout from "./layout/Admin";
import SplashScreen from "./views/SplashScreen";
function App() {
  const [keycloakReady, setKeycloakReady] = useState(false);

  const onKeycloakEvent = (event, error) => {
    console.log("onKeycloakEvent", event, error);
    console.log(`Keycloak Event ${event}`);
    if (event && event === "onReady") {
      setKeycloakReady(true);
    }
  };

  const onKeycloakTokens = (tokens) => {
    console.log("onKeycloakTokens", tokens);
  };

  useEffect(() => {
    document.title = "IC Carrefour";
  }, []);

  return (
    <>
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={{
          onLoad: "login-required",
          redirectUri: "http://localhost:3000/admin/index",
        }}
        keycloak={keycloak}
        onEvent={onKeycloakEvent}
        onTokens={onKeycloakTokens}
      >
        <SplashScreen keycloakReady={keycloakReady}>
          <Router>
            <Routes>
              <Route
                path="*"
                element={
                  <PrivateRoute>
                    <AdminLayout />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Router>
        </SplashScreen>
      </ReactKeycloakProvider>
    </>
  );
}

export default App;
