import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Starter from "../components/landing/Starter";
import Card from "../components/landing/Card";


export default function Home() {

  return (
    <>

      <Navbar />

      <div className="relative screen-w max-w-screen-2xl px-6 laptop:px-24 m-auto">

        <Starter />
        <Card />

      </div>
    </>


  );
}