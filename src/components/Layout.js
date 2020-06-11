import React from "react";

function Layout({children, title, footer}) {
  return (
    <>
      <div className="section">
        <p className="title">{title}</p>
      </div>
      {children}
      <div className="section">
        <p className="title">{footer}</p>
      </div>
    </>
  );
}

export default Layout;
