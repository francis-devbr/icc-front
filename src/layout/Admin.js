import React, { useEffect, useRef } from "react";
import {
  useLocation,
  Route,
  Navigate,
  Routes,
  matchRoutes,
} from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components

import { AnimatePresence } from "framer-motion";

import routes from "../routes";
import Footer from "../components/footer/AdminFooter";
import AdminNavbar from "../components/navbar/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { motion } from "framer-motion";
const Admin = (props) => {
  const mainContent = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            element={prop.element}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "ICC";
  };

  return (
    <>
      <Sidebar
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/logo_icc.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar brandText={getBrandText(props.location.pathname)} />

        <AnimatePresence mode="wait">
          <Routes>{getRoutes(routes)}</Routes>
        </AnimatePresence>
        <Container fluid></Container>
      </div>
    </>
  );
};

export default Admin;
