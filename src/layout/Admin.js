import React, { useEffect, useRef, useState } from "react";
import { useLocation, Route, Routes } from "react-router-dom";

import routes from "routes";

import AdminNavbar from "components/navbar/AdminNavbar";

import Sidebar from "components/sidebarleft/Sidebar";

const Admin = () => {
  const [sidenavOpen, setSidenavOpen] = useState(true);
  const mainContent = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;

    console.log(sidenavOpen)
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }

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

  // toggles collapse between mini sidenav and normal
  const toggleSidenav = (e) => {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
    }
    setSidenavOpen(!sidenavOpen);
  };

  const getNavbarTheme = () => {
    return location.pathname.indexOf("admin/alternative-dashboard") === -1
      ? "dark"
      : "light";
  };

  return (
    <>
      <Sidebar
        routes={routes.filter((route) => {
          return route.showSidebar === true;
        })}
        toggleSidenav={toggleSidenav}
        sidenavOpen={sidenavOpen}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("assets/img/brand/logo_icc.png"),
          imgAlt: "...",
        }}
      />

      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          theme={getNavbarTheme()}
          toggleSidenav={toggleSidenav}
          sidenavOpen={sidenavOpen}
          brandText={getBrandText()}
        />
        <Routes>{getRoutes(routes)}</Routes>
      </div>
      {sidenavOpen ? (
        <div className="backdrop d-xl-none" onClick={toggleSidenav} />
      ) : null}
    </>
  );
};

export default Admin;
