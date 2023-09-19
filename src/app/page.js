"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "@/API/useFetch";
import axiosFetch from "@/API/axiosFetch";
import FormPemilih from "@/components/FormPemilih";
import FormDapil from "@/components/FormDapil";

export default function Home() {
  // useEffect(() => {
  //   console.log(Number(category) === 1 || Number(category) === 2);
  //   console.log(Number(category) > 2);
  // }, [category]);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-200 p-4">
        {/* <FormPemilih /> */}
        <FormDapil />
      </div>
      <div className="bg-blue-200 p-4"></div>
    </div>
  );
}
