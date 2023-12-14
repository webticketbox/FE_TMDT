import React, { useEffect } from "react";
import { Box } from "@mui/material";
import SideBarAdmin from "./sidebar/SideBarAdmin";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

function AdminLayout({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) navigate("/login");
    };
    checkLogin();
  }, []);
  return (
    <Box display={"flex"}>
      <SideBarAdmin />
      <Box flex={1}>
        <Box minHeight={"100vh"}>{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default AdminLayout;
