// import { withRouter } from "next/navigation";
"use client";
import axiosFetch from "@/API/axiosFetch";
import useFetch from "@/API/useFetch";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState(null);
  const [metaData, setMetaData] = useState(null);

  const fetchData = async () => {
    const id_upa = searchParams.get("id_upa");
    const id_dpr_level = searchParams.get("id_dpr_level");
    const dapil = searchParams.get("dapil");
    const id_category = searchParams.get("id_category");
    const id_sub_category = searchParams.get("id_sub_category");
    let url = `/pemilih?dapil=${dapil}&id_dpr_level=${id_dpr_level}&${
      id_upa ? "id_upa=" + id_upa : null
    }&${id_category ? "id_category=" + id_category : null}&${
      id_sub_category ? "id_sub_category=" + id_id_sub_categoryupa : null
    }`;

    try {
      const res = await axiosFetch("get", url, {}, "token");
      setData(res.data.data);
      setMetaData(res.data.metadata);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="py-5 font-bold">Data Pemilih ({searchParams.get("rekrut")})</h1>
      <table class="w-full table-auto border text-center">
        <thead>
          <tr>
            <th class="border">no</th>
            <th class="border">nama</th>
            <th class="border">nik</th>
            <th class="border">gender</th>
            <th class="border">alamat</th>
            <th class="border">tps</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => (
            <tr>
              <td class="border">{i + 1}</td>
              <td class="border">{item.nama}</td>
              <td class="border">{item.nik}</td>
              <td class="border">{item.gender}</td>
              <td class="border">{item.alamat}</td>
              <td class="border">{item.tps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
