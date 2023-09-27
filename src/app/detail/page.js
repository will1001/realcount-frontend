// import { withRouter } from "next/navigation";
"use client";
import useFetch from "@/API/useFetch";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pemilihs = useFetch("get", `/pemilih`);

  return (
    <div>
      <h1 className="py-5 font-bold">Data Pemilih</h1>
      {/* {searchParams.get("id_dpr_level")} */}
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
          {pemilihs?.data?.map((item, i) => (
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
