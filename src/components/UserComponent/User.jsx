import React from "react";
import Navbar from "../LandingPage/navbar.module";
import Footer from "../LandingPage/footer.section";
import { Outlet } from "react-router-dom";
const User = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default User;
