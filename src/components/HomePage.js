import React from "react";
import useFetch from "@/API/useFetch";
import FormPemilih from "@/components/FormPemilih";
import FormDapil from "@/components/FormDapil";
import SuaraData from "@/components/SuaraData";
import Login from "@/components/Login";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/userReducer";

const HomePage = () => {
  const [formType, setFormType] = useState("suara");

  const [items, setItems] = useState([
    { id: 1, text: "DPR RI", checked: false },
    { id: 2, text: "DPRD PROV", checked: false },
    { id: 3, text: "DPRD KOTA", checked: false },
  ]);

  const username = useSelector((state) => state.user.username);
  const kabupaten = useSelector((state) => state.user.kabupaten);
  const dispatch = useDispatch();

  const sumTotalData = (field, subfield) => {
    let property;

    return targets?.data
      ?.reduce((total, item) => {
        if (field === null) {
          property = item[subfield];
        } else {
          property = item[field][subfield];
        }
        return total + Number(property);
      }, 0)
      .toLocaleString();
  };

  const changeForm = (form) => {
    setFormType(form);
  };
  const logout = () => {
    dispatch(
      setToken({
        username: "",
      })
    );
  };

  const targets = useFetch("get", "/target");
  const dapil1 = useFetch("get", "/suara?dapil=1");
  const dapil2 = useFetch("get", "/suara?dapil=2");
  const dapil3 = useFetch("get", "/suara?dapil=3");
  const dapil4 = useFetch("get", "/suara?dapil=4");
  const dapil5 = useFetch("get", "/suara?dapil=5");
  const dapil6 = useFetch("get", "/suara?dapil=6");
  const dapil7 = useFetch("get", "/suara?dapil=7");
  const dapil8 = useFetch("get", "/suara?dapil=8");
  const suarasProv = useFetch("get", "/suara?id_dpr_level=2");
  const suarasKota = useFetch("get", "/suara?id_dpr_level=3");

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-gray-200 p-4">
        {username === "" ? (
          <>
            <Login />
          </>
        ) : (
          <>
            {username === "super admin" ? (
              <>
                <div className="flex gap-3">
                  <h1
                    className="p-3 border border-black cursor-pointer"
                    onClick={() => changeForm("suara")}
                  >
                    Form Suara
                  </h1>
                  <h1
                    className="p-3 border border-black cursor-pointer"
                    onClick={() => changeForm("target")}
                  >
                    Form Target
                  </h1>
                  <h1
                    className="p-3 border border-black cursor-pointer"
                    onClick={() => logout()}
                  >
                    Logout
                  </h1>
                </div>
                {formType === "suara" ? (
                  <>
                    {" "}
                    <FormPemilih />
                  </>
                ) : (
                  <>
                    <FormDapil />{" "}
                  </>
                )}
              </>
            ) : (
              <>
                {" "}
                <FormPemilih />
              </>
            )}
          </>
        )}

        {/* <FormDapil /> */}
      </div>
      <div className="bg-blue-200 p-4">
        {formType === "target" ? (
          <>
            <table class="w-full table-auto border">
              <thead>
                <tr>
                  <th class="border" colSpan={1} rowSpan={2}>
                    No
                  </th>
                  <th class="border" colSpan={1} rowSpan={2}>
                    Dapil
                  </th>
                  <th class="border" colSpan={1} rowSpan={2}>
                    Jumlah Kec
                  </th>
                  <th class="border" colSpan={1} rowSpan={2}>
                    Jumlah Kel
                  </th>
                  <th class="border" colSpan={1} rowSpan={2}>
                    Jumlah tps
                  </th>
                  <th class="border" colSpan={8}>
                    Target suara
                  </th>
                </tr>
                <tr>
                  <th class="border">anggota</th>
                  <th class="border">dpc</th>
                  <th class="border">dpra</th>
                  <th class="border">bko</th>
                  <th class="border">bpkk</th>
                  <th class="border">bpu</th>
                  <th class="border">kepemudaan</th>
                  <th class="border">tn</th>
                </tr>
              </thead>
              <tbody>
                {targets?.data?.map((item, i) => (
                  <tr>
                    <td class="border">{i + 1}</td>
                    <td class="border">{item?.dapil?.name}</td>
                    <td class="border">
                      {item.dapil.jml_kecamatan.toLocaleString()}
                    </td>
                    <td class="border">
                      {item.dapil.jml_kelurahan.toLocaleString()}
                    </td>
                    <td class="border">
                      {item.dapil.jml_tps.toLocaleString()}
                    </td>
                    <td class="border">{item.anggota.toLocaleString()}</td>
                    <td class="border">{item.dpc.toLocaleString()}</td>
                    <td class="border">{item.dpra.toLocaleString()}</td>
                    <td class="border">{item.bko.toLocaleString()}</td>
                    <td class="border">{item.bpkk.toLocaleString()}</td>
                    <td class="border">{item.bpu.toLocaleString()}</td>
                    <td class="border">{item.kepemudaan.toLocaleString()}</td>
                    <td class="border">{item.tn.toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="font-bold">
                  <td class="border"></td>
                  <td class="border"></td>
                  <td class="border">
                    {sumTotalData("dapil", "jml_kecamatan")}
                  </td>
                  <td class="border">
                    {sumTotalData("dapil", "jml_kelurahan")}
                  </td>
                  <td class="border">{sumTotalData("dapil", "jml_tps")}</td>
                  <td class="border">{sumTotalData(null, "anggota")}</td>
                  <td class="border">{sumTotalData(null, "dpc")}</td>
                  <td class="border">{sumTotalData(null, "dpra")}</td>
                  <td class="border">{sumTotalData(null, "bko")}</td>
                  <td class="border">{sumTotalData(null, "bpkk")}</td>
                  <td class="border">{sumTotalData(null, "bpu")}</td>
                  <td class="border">{sumTotalData(null, "kepemudaan")}</td>
                  <td class="border">{sumTotalData(null, "tn")}</td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <>
            {/* <h1>Data Suara</h1>
    <div>DPR RI = {suarasRI?.data ? suarasRI?.data[0].count : 0}</div>
    <div>
      DPR Prov = {suarasProv?.data ? suarasProv?.data[0].count : 0}
    </div>
    <div>
      DPR Kota = {suarasKota?.data ? suarasKota?.data[0].count : 0}
    </div> */}
            <SuaraData dapil={"1"} items={items} datas={dapil1} />
            <SuaraData dapil={"2"} items={items} datas={dapil2} />
            <SuaraData dapil={"3"} items={items} datas={dapil3} />
            <SuaraData dapil={"4"} items={items} datas={dapil4} />
            <SuaraData dapil={"5"} items={items} datas={dapil5} />
            <SuaraData dapil={"6"} items={items} datas={dapil6} />
            <SuaraData dapil={"7"} items={items} datas={dapil7} />
            <SuaraData dapil={"8"} items={items} datas={dapil8} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
