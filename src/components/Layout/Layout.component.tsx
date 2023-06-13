import Header from "../Header/Header.component";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="m-24">{children}</main>
    </>
  );
}

export default Layout;
