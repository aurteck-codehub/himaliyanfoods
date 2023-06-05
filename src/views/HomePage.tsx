"use client";
import React from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Qoutation from "@/components/Qoutation";
import Categories from "@/components/Categories";

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Qoutation />
      <Categories />
    </>
  );
};

export default HomePage;
