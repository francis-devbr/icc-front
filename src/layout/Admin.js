import React, { useEffect, useRef } from "react";
import { useLocation, Route, Routes } from "react-router-dom";

import routes from "../routes";

import AdminNavbar from "../components/navbar/AdminNavbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Flip, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Admin = () => {
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

  const getBrandText = () => {
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
        routes={routes.filter((route) => {
          return route.showSidebar === true;
        })}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/logo_icc.png"),
          imgAlt: "...",
        }}
      />

      <div className="main-content" ref={mainContent}>
        <ToastContainer transition={Flip} />
        <AdminNavbar brandText={getBrandText()} />
        <Routes>{getRoutes(routes)}</Routes>
      </div>
    </>
  );
};

export default Admin;
