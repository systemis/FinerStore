import React from "react";
import Header from "../components/header";
import Footer from "../components/footer"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='app-layout'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout; 