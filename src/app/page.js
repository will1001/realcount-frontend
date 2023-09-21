"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "@/API/useFetch";
import axiosFetch from "@/API/axiosFetch";
import FormPemilih from "@/components/FormPemilih";
import FormDapil from "@/components/FormDapil";
import Checklist from "@/components/Checklist";

export default function Home() {
  const [formType, setFormType] = useState("suara");

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
  const data = [
    {
      _id: "c4c370cb-413a-4338-8ae8-11dea1a266a7",
      id_dapil: 1,
      anggota: 22,
      dpc: 33,
      dpra: 4,
      bpkk: 5,
      tn: 6,
      kepemudaan: 7,
      bko: 8,
      bpu: 9,
      createdAt: "2023-09-19T14:52:21.054Z",
      updatedAt: "2023-09-19T15:19:52.876Z",
      dapil: {
        _id: 1,
        name: "Dapil 1",
        jml_kecamatan: 6,
        jml_kelurahan: 50,
        jml_tps: 1248,
      },
    },
    {
      _id: "c4c370cb-413a-4338-8ae8-11dea1a266a7",
      id_dapil: 1,
      anggota: 22,
      dpc: 33,
      dpra: 4,
      bpkk: 5,
      tn: 6,
      kepemudaan: 7,
      bko: 8,
      bpu: 9,
      createdAt: "2023-09-19T14:52:21.054Z",
      updatedAt: "2023-09-19T15:19:52.876Z",
      dapil: {
        _id: 1,
        name: "Dapil 1",
        jml_kecamatan: 6,
        jml_kelurahan: 50,
        jml_tps: 1248,
      },
    },
  ];

  const changeForm = (form) => {
    setFormType(form);
  };

  const targets = useFetch("get", "/target");

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-gray-200 p-4">
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
        {/* <FormDapil /> */}
      </div>
      <div className="bg-blue-200 p-4">
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
                <td class="border">{item.dapil.jml_tps.toLocaleString()}</td>
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
              <td class="border">{sumTotalData("dapil", "jml_kecamatan")}</td>
              <td class="border">{sumTotalData("dapil", "jml_kelurahan")}</td>
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
      </div>
    </div>
  );
}
