import BrakingNews from "@/Components/shared/BrakingNews";
import Header from "@/Components/shared/Header";
import NavBar from "@/Components/shared/NavBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="">
      <Header></Header>
      <BrakingNews></BrakingNews>
      <NavBar></NavBar>
      {children}
    </div>
  );
};

export default layout;
