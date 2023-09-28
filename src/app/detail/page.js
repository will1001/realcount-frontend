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

  const id_upa = searchParams.get("id_upa");
  const fetchData = async () => {
    const id_dpr_level = searchParams.get("id_dpr_level");
    const dapil = searchParams.get("dapil");
    const id_category = searchParams.get("id_category");
    const id_sub_category = searchParams.get("id_sub_category");
    let url = `/pemilih?dapil=${dapil}&id_dpr_level=${id_dpr_level}`;
    if (id_upa) {
      url = `/pemilih?dapil=${dapil}&id_dpr_level=${id_dpr_level}&id_upa=${id_upa}`;
    }
    if (id_category) {
      url = `/pemilih?dapil=${dapil}&id_dpr_level=${id_dpr_level}&id_category=${id_category}`;
    }
    if (id_sub_category) {
      url = `/pemilih?dapil=${dapil}&id_dpr_level=${id_dpr_level}&id_sub_category=${id_sub_category}`;
    }
    console.log(url);

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
      <h1 className="py-5 font-bold">
        Data Pemilih ({searchParams.get("rekrut")})
      </h1>
      <table className="w-full table-auto border text-center">
        <thead>
          <tr>
            <th className="border">no</th>
            <th className="border">nama</th>
            {id_upa ? <th className="border">UPA</th> : <></>}
            <th className="border">nik</th>
            <th className="border">gender</th>
            <th className="border">alamat</th>
            <th className="border">tps</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => (
            <tr>
              <td className="border">{i + 1}</td>
              <td className="border">{item.nama}</td>
              {id_upa ? (
                <td className="border">{item.sub_category?.name}</td>
              ) : (
                <></>
              )}
              <td className="border">{item.nik}</td>
              <td className="border">{item.gender}</td>
              <td className="border">{item.alamat}</td>
              <td className="border">{item.tps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
