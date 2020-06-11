import React from "react";
import Alerter from "./Alerter";

function Layout({ children, title, footer }) {
  return (
    <>
      <div className="section">
        <p className="title">{title}</p>
      </div>
      {children}
      <div className="section">
        <p className="title">{footer}</p>
        <Alerter />
      </div>
    </>
  );
}

export default Layout;
