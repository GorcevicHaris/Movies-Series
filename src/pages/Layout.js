import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <div className="loyaout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
