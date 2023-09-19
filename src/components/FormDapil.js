"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "@/API/useFetch";
import axiosFetch from "@/API/axiosFetch";

function FormDapil() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [dapil, setDapil] = useState("");

  const [body, setBody] = useState({
    nama: "",
    nik: "",
    gender: "",
    alamat: "",
    tps: "",
    id_kabupaten: "",
    id_kecamatan: "",
    id_kelurahan: "",
    id_category: "",
    id_sub_category: "",
    id_upa: "",
    id_bcad: "",
  });

  const changeDapil = async (id) => {
    try {
      // setBody({ ...body, id_kabupaten });

      setDapil(id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
        <input placeholder="anggota" type="text" />
      </select>
    </div>
  );
}

export default FormDapil;
