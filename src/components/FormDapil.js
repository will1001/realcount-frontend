"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "@/API/useFetch";
import axiosFetch from "@/API/axiosFetch";
import InputText from "./inputNumber";

function FormDapil() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [dapil, setDapil] = useState("");

  const [formData, setFormData] = useState({
    id_dapil: "",
    anggota: 0,
    dpc: 0,
    dpra: 0,
    bpkk: 0,
    tn: 0,
    kepemudaan: 0,
    bko: 0,
    bpu: 0,
  });

  const changeDapil = async (id) => {
    try {
      // setBody({ ...body, id_kabupaten });
      setFormData({
        ...formData,
        id_dapil: id,
      });
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
  const saveTarget = async () => {
    if (formData.id_dapil === "") {
      alert("Pilih Dapil Terlebih dahulu");
    } else {
      await axiosFetch("post", `/target`, formData, "token")
        .then((res) => {
          window.location.reload(false);
        })
        .catch((error) => {
          console.log(error);
        });
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
      </select>

      <InputText
        title="anggota"
        value={formData.anggota}
        onChange={handleInputChange}
      />
      <InputText
        title="dpc"
        value={formData.dpc}
        onChange={handleInputChange}
      />
      <InputText
        title="dpra"
        value={formData.dpra}
        onChange={handleInputChange}
      />
      <InputText
        title="bko"
        value={formData.bko}
        onChange={handleInputChange}
      />
      <InputText
        title="bpkk"
        value={formData.bpkk}
        onChange={handleInputChange}
      />
      <InputText
        title="bpu"
        value={formData.bpu}
        onChange={handleInputChange}
      />
      <InputText
        title="kepemudaan"
        value={formData.kepemudaan}
        onChange={handleInputChange}
      />
      <InputText title="tn" value={formData.tn} onChange={handleInputChange} />

      <br />
      <button className="bg-blue-500 p-2" onClick={saveTarget}>
        Simpan
      </button>
    </div>
  );
}

export default FormDapil;
