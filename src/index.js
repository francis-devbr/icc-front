import React from "react";
import { createRoot } from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import AdminLayout from "./layout/Admin";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";
import "./assets/plugins/nucleo/css/nucleo.css";

import PrivateRoute from "./layout/PrivateRoute";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={{
      onLoad: "login-required",
      redirectUri: "http://localhost:3000/admin/index",
    }}
    keycloak={keycloak}
  >
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
  </ReactKeycloakProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
