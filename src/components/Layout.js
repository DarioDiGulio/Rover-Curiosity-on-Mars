import React from "react";

function Layout(props) {
  const children = props.children;
  return (
    <React.Fragment>
      <div className="section">
        <p className="title">{props.title}</p>
      </div>
      {children}
      <div className="section">
        <p className="title">{props.footer}</p>
      </div>
    </React.Fragment>
  );
}

export default Layout;
