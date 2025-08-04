import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { ThemeContextProvider } from "../ThemeContext";

const Home = () => {
  return (
    <ThemeContextProvider>
      <TopBar />
      <Dashboard />
    </ThemeContextProvider>
  );
};

export default Home;