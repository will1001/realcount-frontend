"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "@/API/useFetch";
import axiosFetch from "@/API/axiosFetch";

function FormPemilih() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [kabupaten, setKabupaten] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kecamatans, setKecamatans] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [kelurahans, setKelurahans] = useState("");
  const [category, setCategory] = useState("");
  const [subCategories, setSubCategories] = useState("");
  const [subCategory, setSubCategory] = useState("");

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

  const fetchData = async () => {
    try {
      const response = await axios.get(baseUrl + "/hello");
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const changeKabupaten = async (id_kabupaten) => {
    try {
      const res = await axiosFetch(
        "GET",
        `/kecamatan/${id_kabupaten}`,
        {},
        "token"
      );
      setKecamatans(res.data);

      setBody({ ...body, id_kabupaten });

      setKabupaten(id_kabupaten);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const changeKecamatan = async (id_kecamatan) => {
    try {
      const res = await axiosFetch(
        "GET",
        `/kelurahan/${id_kecamatan}`,
        {},
        "token"
      );
      setKelurahans(res.data);

      setBody({ ...body, id_kecamatan });

      setKecamatan(id_kecamatan);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const changeCategory = async (id_category) => {
    try {
      const res = await axiosFetch(
        "GET",
        `/sub_category/${id_category}`,
        {},
        "token"
      );
      setSubCategories(res.data);
      setCategory(id_category);
      setBody({ ...body, id_category });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const changeSubCategory = async (id_sub_category) => {
    try {
      // const res = await axiosFetch("get", `/subCategory/${id_category}`);
      // setSubCategories(res.data);
      setBody({ ...body, id_sub_category });

      setSubCategory(id_sub_category);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const kabupatens = useFetch("get", "/kabupaten");
  const categories = useFetch("get", "/category");
  return (
    <div>
      <select
        value={kabupaten}
        onChange={(e) => changeKabupaten(e.target.value)}
        className="border border-[#9CA3AF] text-[18px] font-semibold mt-[16px] outline-0 cursor-pointer w-full px-2 py-2 rounded-md"
      >
        <option value={""} disabled>
          Pilih Kabupaten
        </option>
        {kabupatens?.data?.map((res) => (
          <option key={res._id} value={res._id}>
            {res.name}
          </option>
        ))}
      </select>
      <select
        value={category}
        onChange={(e) => changeCategory(e.target.value)}
        className="border border-[#9CA3AF] text-[18px] font-semibold mt-[16px] outline-0 cursor-pointer w-full px-2 py-2 rounded-md"
      >
        <option value={""} disabled>
          Pilih Kategori
        </option>
        {categories?.data?.map((res) => (
          <option key={res._id} value={res._id}>
            {res.name}
          </option>
        ))}
      </select>
      {Number(category) === 1 || Number(category) === 2 ? (
        <select
          value={subCategory}
          onChange={(e) => changeSubCategory(e.target.value)}
          className="border border-[#9CA3AF] text-[18px] font-semibold mt-[16px] outline-0 cursor-pointer w-full px-2 py-2 rounded-md"
        >
          <option value={""} disabled>
            Pilih Sub Kategori
          </option>
          {subCategories?.data?.map((res) => (
            <option key={res._id} value={res._id}>
              {res.name}
            </option>
          ))}
        </select>
      ) : (
        <h1></h1>
      )}

      <br />
      <br />

      {[5].includes(Number(subCategory)) ? (
        <select
          value={kecamatan}
          onChange={(e) => changeKecamatan(e.target.value)}
          className="border border-[#9CA3AF] text-[18px] font-semibold mt-[16px] outline-0 cursor-pointer w-full px-2 py-2 rounded-md"
        >
          <option value={""} disabled>
            Pilih Kecamatan
          </option>
          {kecamatans?.data?.map((res) => (
            <option key={res._id} value={res._id}>
              {res.name}
            </option>
          ))}
        </select>
      ) : (
        <></>
      )}

      {[6].includes(Number(subCategory)) ? (
        <select
          value={body.id_kelurahan}
          onChange={handleInputChange}
          className="border border-[#9CA3AF] text-[18px] font-semibold mt-[16px] outline-0 cursor-pointer w-full px-2 py-2 rounded-md"
        >
          <option value={""} disabled>
            Pilih Kelurahan
          </option>
          {kelurahans?.data?.map((res) => (
            <option key={res._id} value={res._id}>
              {res.name}
            </option>
          ))}
        </select>
      ) : (
        <></>
      )}

      {Number(category) === 1 ? (
        <input placeholder={"Nama UPA"} type="text" />
      ) : (
        <h1></h1>
      )}

      <br />
      <br />

      <h1 className="font-bold">Data Pemilih</h1>

      <div className="flex flex-col gap-4">
        <input placeholder="Nama" type="text" />
        <input placeholder="NIK" type="text" />
        <select name="" id="">
          <option value={""} disabled>
            Gender
          </option>
          <option value={"Laki - Laki"}>Laki - Laki</option>
          <option value={"Perempuan"}>Perempuan</option>
        </select>
        <input placeholder="Alamat" type="text" />
        <input placeholder="TPS" type="text" />
      </div>

      {/* {[3, 1].includes(Number(category)) ? (
        <div className="flex flex-col gap-4">
          <input placeholder="Nama" type="text" />
          <input placeholder="NIK" type="text" />
          <select name="" id="">
            <option value={""} disabled>
              Gender
            </option>
            <option value={"Laki - Laki"}>Laki - Laki</option>
            <option value={"Perempuan"}>Perempuan</option>
          </select>
          <input placeholder="Alamat" type="text" />
          <input placeholder="TPS" type="text" />
        </div>
      ) : (
        <h1></h1>
      )} */}

      <br />
    </div>
  );
}

export default FormPemilih;
