import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <div className="footer">footer</div>
    </div>
  );
}
