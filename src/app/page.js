"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "@/API/useFetch";
import axiosFetch from "@/API/axiosFetch";
import FormPemilih from "@/components/FormPemilih";
import FormDapil from "@/components/FormDapil";
import Checklist from "@/components/Checklist";

export default function Home() {
  const sumTotalData = (field, subfield) => {
    let property;
    if (field && subfield) property = item[field][subfield];
    if (subfield) property = item[subfield];
    return data.reduce((total, item) => total + Number(property), 0);
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

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-200 p-4">
        {/* <FormPemilih /> */}
        <FormDapil />

        {/* <Checklist /> */}
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
            {data.map((item, i) => (
              <tr>
                <td class="border">{i + 1}</td>
                <td class="border">{item.dapil.name}</td>
                <td class="border">{item.dapil.jml_kecamatan}</td>
                <td class="border">{item.dapil.jml_kelurahan}</td>
                <td class="border">{item.dapil.jml_tps}</td>
                <td class="border">{item.anggota}</td>
                <td class="border">{item.dpc}</td>
                <td class="border">{item.dpra}</td>
                <td class="border">{item.bko}</td>
                <td class="border">{item.bpkk}</td>
                <td class="border">{item.bpu}</td>
                <td class="border">{item.kepemudaan}</td>
                <td class="border">{item.tn}</td>
              </tr>
            ))}
            <tr>
              <td class="border"></td>
              <td class="border"></td>
              <td class="border">{sumTotalData("dapil", "jml_kecamatan")}</td>
              <td class="border">{sumTotalData("dapil", "jml_kelurahan")}</td>
              <td class="border">
                {data.reduce(
                  (total, item) => total + Number(item.dapil.jml_tps),
                  0
                )}
              </td>
              <td class="border">{sumTotalData(null, "dpc")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
