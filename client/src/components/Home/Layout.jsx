import React from "react";
import Alert from "../Alert";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid m-0 p-0">
      <header>
        <Header />
      </header>
      <section>
        <Alert />
        {children}
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
