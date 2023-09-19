"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "@/API/useFetch";
import axiosFetch from "@/API/axiosFetch";

function FormDapil() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [dapil, setDapil] = useState("");

  const [formData, setFormData] = useState({
    anggota: "",
    dpc: "",
    dpra: "",
    bpkk: "",
    tn: "",
    kepemudaan: "",
    bko: "",
    bpu: "",
  });

  const changeDapil = async (id) => {
    try {
      // setBody({ ...body, id_kabupaten });

      setDapil(id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const dapils = useFetch("get", "/dapil");
  return (
    <div>
      <select
        value={dapil}
        onChange={(e) => changeDapil(e.target.value)}
        className="border border-[#9CA3AF] text-[18px] font-semibold mt-[16px] outline-0 cursor-pointer w-full px-2 py-2 rounded-md"
      >
        <option value={""} disabled>
          Pilih Dapil
        </option>
        {dapils?.data?.map((res) => (
          <option key={res._id} value={res._id}>
            {res.name}
          </option>
        ))}
        <h1>adasd</h1>
        {/* <label htmlFor="anggota">Anggota: </label>
        <input
          type="text"
          name="anggota"
          placeholder="anggota"
          value={formData.anggota}
          onChange={handleInputChange}
        /> */}
      </select>
    </div>
  );
}

export default FormDapil;
