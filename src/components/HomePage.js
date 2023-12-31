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
import RowTableSuara from "./RowTableSuara";
import axiosFetch from "@/API/axiosFetch";

const HomePage = () => {
  const [formType, setFormType] = useState("suara");
  const [file, setFile] = useState(null);

  const [items, setItems] = useState([
    { id: 1, text: "DPR RI", checked: false },
    { id: 2, text: "DPRD PROV", checked: false },
    { id: 3, text: "DPRD KOTA", checked: false },
  ]);

  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const upload = async () => {
    console.log("upload");

    const a = new FormData();
    a.append("file", file);

    await axiosFetch("post", `/upload`, a, "token")
      .then((res) => {
        // window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        id_kabupaten: "",
        kabupaten: "",
      })
    );
    window.location.reload(false);
  };

  const targets = useFetch("get", "/target");
  const dapil1dpr1 = useFetch("get", "/suara?dapil=1&id_dpr_level=1");
  const dapil2dpr1 = useFetch("get", "/suara?dapil=2&id_dpr_level=1");
  const dapil3dpr1 = useFetch("get", "/suara?dapil=3&id_dpr_level=1");
  const dapil4dpr1 = useFetch("get", "/suara?dapil=4&id_dpr_level=1");
  const dapil5dpr1 = useFetch("get", "/suara?dapil=5&id_dpr_level=1");
  const dapil6dpr1 = useFetch("get", "/suara?dapil=6&id_dpr_level=1");
  const dapil7dpr1 = useFetch("get", "/suara?dapil=7&id_dpr_level=1");
  const dapil8dpr1 = useFetch("get", "/suara?dapil=8&id_dpr_level=1");
  const dapil1dpr2 = useFetch("get", "/suara?dapil=1&id_dpr_level=2");
  const dapil2dpr2 = useFetch("get", "/suara?dapil=2&id_dpr_level=2");
  const dapil3dpr2 = useFetch("get", "/suara?dapil=3&id_dpr_level=2");
  const dapil4dpr2 = useFetch("get", "/suara?dapil=4&id_dpr_level=2");
  const dapil5dpr2 = useFetch("get", "/suara?dapil=5&id_dpr_level=2");
  const dapil6dpr2 = useFetch("get", "/suara?dapil=6&id_dpr_level=2");
  const dapil7dpr2 = useFetch("get", "/suara?dapil=7&id_dpr_level=2");
  const dapil8dpr2 = useFetch("get", "/suara?dapil=8&id_dpr_level=2");
  const dapil1dpr3 = useFetch("get", "/suara?dapil=1&id_dpr_level=3");
  const dapil2dpr3 = useFetch("get", "/suara?dapil=2&id_dpr_level=3");
  const dapil3dpr3 = useFetch("get", "/suara?dapil=3&id_dpr_level=3");
  const dapil4dpr3 = useFetch("get", "/suara?dapil=4&id_dpr_level=3");
  const dapil5dpr3 = useFetch("get", "/suara?dapil=5&id_dpr_level=3");
  const dapil6dpr3 = useFetch("get", "/suara?dapil=6&id_dpr_level=3");
  const dapil7dpr3 = useFetch("get", "/suara?dapil=7&id_dpr_level=3");
  const dapil8dpr3 = useFetch("get", "/suara?dapil=8&id_dpr_level=3");
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
                    Progress Suara
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
                  <> {/* <FormPemilih /> */}</>
                ) : formType === "import" ? (
                  <>
                    <h1>Import Data</h1>
                    <input
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                      type="file"
                    />
                    <br />
                    <br />
                    <a
                      className="underline cursor-pointer"
                      target="_blank"
                      href="https://docs.google.com/spreadsheets/d/1yanBY6rR4eWwU2E-s4TD_23WSYYmaU6nKPrBuYQIFNk/edit#gid=873587797"
                    >
                      Contoh format file
                    </a>
                    <br />
                    <br />
                    <button className="bg-blue-500 p-2" onClick={upload}>
                      Simpan
                    </button>
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
                <div className="flex gap-3">
                  <h1
                    className="p-3 border border-black cursor-pointer"
                    onClick={() => changeForm("suara")}
                  >
                    Progress Suara
                  </h1>
                  <h1
                    className="p-3 border border-black cursor-pointer"
                    onClick={() => changeForm("import")}
                  >
                    Form Import Excel
                  </h1>
                  <h1
                    className="p-3 border border-black cursor-pointer w-[80px]"
                    onClick={() => logout()}
                  >
                    Logout
                  </h1>
                </div>
                {formType === "import" ? (
                  <>
                    <h1>Import Data</h1>
                    <input
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                      type="file"
                    />
                    <br />
                    <br />
                    <a
                      className="underline cursor-pointer"
                      target="_blank"
                      href="https://docs.google.com/spreadsheets/d/1yanBY6rR4eWwU2E-s4TD_23WSYYmaU6nKPrBuYQIFNk/edit#gid=873587797"
                    >
                      Contoh format file
                    </a>
                    <br />
                    <br />
                    <button className="bg-blue-500 p-2" onClick={upload}>
                      Simpan
                    </button>
                  </>
                ) : (
                  <FormPemilih />
                )}
              </>
            )}
          </>
        )}

        {/* <FormDapil /> */}
      </div>
      <div className="bg-blue-200 p-4">
        {username === "" ? (
          <></>
        ) : (
          <>
            {formType === "target" ? (
              <>
                <table class="w-full table-auto border text-center">
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
                      <th class="border">tani nelayan</th>
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
                        <td class="border">
                          {item.kepemudaan.toLocaleString()}
                        </td>
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
            ) : formType === "import" ? (
              <></>
            ) : (
              <>
                <table class="w-full table-auto border text-center my-5">
                  <thead>
                    <tr>
                      <th class="border" colSpan={1} rowSpan={2}>
                        Dapil
                      </th>

                      <th class="border" colSpan={8}>
                        Progress suara (DPR RI)
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
                      <th class="border">tani nelayan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <RowTableSuara
                      data={dapil1dpr1}
                      nomor={1}
                      index={0}
                      dprlevel={1}
                    />
                    <RowTableSuara
                      data={dapil2dpr1}
                      nomor={2}
                      index={0}
                      dprlevel={1}
                    />
                    <RowTableSuara
                      data={dapil3dpr1}
                      nomor={3}
                      index={0}
                      dprlevel={1}
                    />
                    <RowTableSuara
                      data={dapil4dpr1}
                      nomor={4}
                      index={0}
                      dprlevel={1}
                    />
                    <RowTableSuara
                      data={dapil5dpr1}
                      nomor={5}
                      index={0}
                      dprlevel={1}
                    />
                    <RowTableSuara
                      data={dapil6dpr1}
                      nomor={6}
                      index={0}
                      dprlevel={1}
                    />
                    <RowTableSuara
                      data={dapil7dpr1}
                      nomor={7}
                      index={0}
                      dprlevel={1}
                    />
                    <RowTableSuara
                      data={dapil8dpr1}
                      nomor={8}
                      index={0}
                      dprlevel={1}
                    />
                  </tbody>
                </table>

                {/* <div className="font-bold">DPR Prov</div> */}

                <table class="w-full table-auto border text-center my-5">
                  <thead>
                    <tr>
                      <th class="border" colSpan={1} rowSpan={2}>
                        Dapil
                      </th>

                      <th class="border" colSpan={8}>
                        Progress suara (DPR Prov)
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
                      <th class="border">tani nelayan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <RowTableSuara
                      data={dapil1dpr2}
                      nomor={1}
                      index={0}
                      dprlevel={2}
                    />
                    <RowTableSuara
                      data={dapil2dpr2}
                      nomor={2}
                      index={0}
                      dprlevel={2}
                    />
                    <RowTableSuara
                      data={dapil3dpr2}
                      nomor={3}
                      index={0}
                      dprlevel={2}
                    />
                    <RowTableSuara
                      data={dapil4dpr2}
                      nomor={4}
                      index={0}
                      dprlevel={2}
                    />
                    <RowTableSuara
                      data={dapil5dpr2}
                      nomor={5}
                      index={0}
                      dprlevel={2}
                    />
                    <RowTableSuara
                      data={dapil6dpr2}
                      nomor={6}
                      index={0}
                      dprlevel={2}
                    />
                    <RowTableSuara
                      data={dapil7dpr2}
                      nomor={7}
                      index={0}
                      dprlevel={2}
                    />
                    <RowTableSuara
                      data={dapil8dpr2}
                      nomor={8}
                      index={0}
                      dprlevel={2}
                    />
                  </tbody>
                </table>

                {/* <div className="font-bold">DPR Kota</div> */}

                <table class="w-full table-auto border text-center my-5">
                  <thead>
                    <tr>
                      <th class="border" colSpan={1} rowSpan={2}>
                        Dapil
                      </th>

                      <th class="border" colSpan={8}>
                        Progress suara (DPR Kota)
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
                      <th class="border">tani nelayan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <RowTableSuara
                      data={dapil1dpr3}
                      nomor={1}
                      index={0}
                      dprlevel={3}
                    />
                    <RowTableSuara
                      data={dapil2dpr3}
                      nomor={2}
                      index={0}
                      dprlevel={3}
                    />
                    <RowTableSuara
                      data={dapil3dpr3}
                      nomor={3}
                      index={0}
                      dprlevel={3}
                    />
                    <RowTableSuara
                      data={dapil4dpr3}
                      nomor={4}
                      index={0}
                      dprlevel={3}
                    />
                    <RowTableSuara
                      data={dapil5dpr3}
                      nomor={5}
                      index={0}
                      dprlevel={3}
                    />
                    <RowTableSuara
                      data={dapil6dpr3}
                      nomor={6}
                      index={0}
                      dprlevel={3}
                    />
                    <RowTableSuara
                      data={dapil7dpr3}
                      nomor={7}
                      index={0}
                      dprlevel={3}
                    />
                    <RowTableSuara
                      data={dapil8dpr3}
                      nomor={8}
                      index={0}
                      dprlevel={3}
                    />
                  </tbody>
                </table>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
