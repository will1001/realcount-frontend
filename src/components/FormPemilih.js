"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "@/API/useFetch";
import axiosFetch from "@/API/axiosFetch";
import { useSelector } from "react-redux";
// import Checklist from "./Checklist";

function FormPemilih() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [kabupaten, setKabupaten] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kecamatans, setKecamatans] = useState("");
  const [dapil, setdapil] = useState("");
  const [kelurahans, setKelurahans] = useState("");
  const [category, setCategory] = useState("");
  const [subCategories, setSubCategories] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [upas, setUpas] = useState("");

  const admin_id_kabupaten = useSelector((state) => state.user.id_kabupaten);
  const admin_kabupaten = useSelector((state) => state.user.kabupaten);

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
    id_dpr_level: [],
  });

  useEffect(async () => {
    if (admin_id_kabupaten !== "") {
      if (["5271"].includes(admin_id_kabupaten)) setdapil("Dapil 1");
      if (["5201", "5208"].includes(admin_id_kabupaten)) setdapil("Dapil 2");
      if (["5207", "5204"].includes(admin_id_kabupaten)) setdapil("Dapil 5");
      if (["5206", "5272", "5205"].includes(admin_id_kabupaten)) setdapil("Dapil 6");
    }
  }, []);

  const savePemilih = async () => {
    console.log(body);
    await axiosFetch("post", `/pemilih`, body, "token")
      .then((res) => {
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [items, setItems] = useState([
    { id: 1, text: "DPR RI", checked: false },
    { id: 2, text: "DPRD PROV", checked: false },
    { id: 3, text: "DPRD KOTA", checked: false },
  ]);

  const handleCheckboxChange = (itemId) => {
    const checked = items.find((item) => item.id === itemId);
    console.log(checked.checked);

    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );

    setItems(updatedItems);
    if (!checked.checked) {
      setBody({ ...body, id_dpr_level: [...body.id_dpr_level, itemId] });
    } else {
      setBody((body) => {
        const newIdDprLevel = [...body.id_dpr_level];
        newIdDprLevel.pop();
        return {
          ...body,
          id_dpr_level: newIdDprLevel,
        };
      });
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

      if (["5271"].includes(id_kabupaten)) setdapil("Dapil 1");
      if (["5201", "5208"].includes(id_kabupaten)) setdapil("Dapil 2");
      if (["5207", "5204"].includes(id_kabupaten)) setdapil("Dapil 5");
      if (["5206", "5272", "5205"].includes(id_kabupaten)) setdapil("Dapil 6");
      setBody({ ...body, id_kabupaten });

      setKabupaten(id_kabupaten);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const changeKecamatan = async (id_kecamatan) => {
    try {
      if (
        [
          "5203031",
          "5203030",
          "5203040",
          "5203020",
          "5203021",
          "5203022",
          "5203010",
          "5203011",
        ].includes(id_kecamatan)
      ) {
        setdapil("Dapil 4");
      }
      if (
        [
          "5203050",
          "5203060",
          "5203070",
          "5203080",
          "5203090",
          "5203100",
          "5203051",
          "5203061",
          "5203091",
          "5203092",
          "5203081",
          "5203071",
        ].includes(id_kecamatan)
      ) {
        setdapil("Dapil 3");
      }
      if (
        [
          "5202060",
          "5202061",
          "5202040",
          "5202050",
          "5202090",
          "5202091",
        ].includes(id_kecamatan)
      ) {
        setdapil("Dapil 7");
      }
      if (
        [
          "5202070",
          "5202020",
          "5202010",
          "5202030",
          "5202011",
          "5202080",
        ].includes(id_kecamatan)
      ) {
        setdapil("Dapil 8");
      }

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
      if (admin_id_kabupaten !== "") {
        await axiosFetch("get", `/kecamatan/${admin_id_kabupaten}`, {}, "token")
          .then((res) => {
            setKecamatans(res.data);

            // window.location.reload(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }
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
      let url = ``;
      if (admin_id_kabupaten === "") {
        url = `/upa?id_sub_category=${id_sub_category}&id_kabupaten=${kabupaten}`;
      } else {
        url = `/upa?id_sub_category=${id_sub_category}&id_kabupaten=${admin_id_kabupaten}`;
      }
      const res = await axiosFetch("GET", `${url}`, {}, "token");
      setUpas(res.data);
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
      <h1>{dapil}</h1>
      {admin_kabupaten === "" ? (
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
      ) : (
        <h1>Admin : {admin_kabupaten}</h1>
      )}

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

      {[1, 2, 3, 4, 7, 5, 6].includes(Number(subCategory)) ? (
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

      {[1, 2, 3, 4, 7, 6].includes(Number(subCategory)) ? (
        <select
          name="id_kelurahan"
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
      {[1, 2, 3].includes(Number(subCategory)) ? (
        <select
          name="id_upa"
          value={body.id_upa}
          onChange={handleInputChange}
          className="border border-[#9CA3AF] text-[18px] font-semibold mt-[16px] outline-0 cursor-pointer w-full px-2 py-2 rounded-md"
        >
          <option value={""} disabled>
            Pilih Organisasi
          </option>
          {upas?.data?.map((res) => (
            <option key={res._id} value={res._id}>
              {res.name}
            </option>
          ))}
        </select>
      ) : (
        <></>
      )}

      <br />
      <br />

      {[4, 7].includes(Number(subCategory)) ? (
        <input
          name="id_upa"
          onChange={handleInputChange}
          placeholder={"Nama UPA"}
          type="text"
        />
      ) : (
        <h1></h1>
      )}

      <br />
      <br />

      <h1 className="font-bold">Data Pemilih</h1>

      <div className="flex flex-col gap-4">
        <input
          onChange={handleInputChange}
          name="nama"
          placeholder="Nama"
          type="text"
        />
        <input
          onChange={handleInputChange}
          name="nik"
          placeholder="NIK"
          type="text"
        />
        <select name="gender" value={body.gender} onChange={handleInputChange}>
          <option value={""} disabled>
            Gender
          </option>
          <option value={"Laki - Laki"}>Laki - Laki</option>
          <option value={"Perempuan"}>Perempuan</option>
        </select>
        <input
          name="alamat"
          onChange={handleInputChange}
          placeholder="Alamat"
          type="text"
        />
        <input
          name="tps"
          onChange={handleInputChange}
          placeholder="TPS"
          type="text"
        />
      </div>

      <div>
        <h2>Checklist</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckboxChange(item.id)}
              />
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <br />
      <button className="bg-blue-500 p-2" onClick={savePemilih}>
        Simpan
      </button>

      {/* <Checklist /> */}

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
