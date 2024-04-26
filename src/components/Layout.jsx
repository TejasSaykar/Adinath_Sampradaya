import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children}) => {
  return (
    <div>
      <header className="shadow-lg fixed z-10 bg-white top-0 w-full">
        <Navbar />
      </header>
      <main className="mt-[6rem]">{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
