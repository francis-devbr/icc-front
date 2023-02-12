import React, { useState } from "react";
import PrivateRoute from "./layout/PrivateRoute";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLayout from "./layout/Admin";
import SplashScreen from "./components/SplashScreen";
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

  return (
    <>
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={{
          onLoad: "login-required",
          redirectUri: process.env.REACT_APP_BASE_URL_KEYCLOAK,
        }}
        keycloak={keycloak}
        onEvent={onKeycloakEvent}
        onTokens={onKeycloakTokens}
      >
        <Router>
          <SplashScreen keycloakReady={keycloakReady}>
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
          </SplashScreen>
        </Router>
      </ReactKeycloakProvider>
    </>
  );
}

export default App;
