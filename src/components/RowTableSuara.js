import React from "react";

function RowTableSuara({ data, nomor ,index}) {
  return (
    <tr>
      <td class="border">{nomor}</td>
      <td class="border">dapil {nomor}</td>
      <td class="border">
        {data.data ? data?.data[index]?.anggota.toLocaleString() : 0}
      </td>
      <td class="border">
        {data.data ? data?.data[index]?.dpc.toLocaleString() : 0}
      </td>
      <td class="border">
        {data.data ? data?.data[index]?.dpra.toLocaleString() : 0}
      </td>
      <td class="border">
        {data.data ? data?.data[index]?.bko.toLocaleString() : 0}
      </td>
      <td class="border">
        {data.data ? data?.data[index]?.bpkk.toLocaleString() : 0}
      </td>
      <td class="border">
        {data.data ? data?.data[index]?.bpu.toLocaleString() : 0}
      </td>
      <td class="border">
        {data.data ? data?.data[index]?.kepemudaan.toLocaleString() : 0}
      </td>
      <td class="border">
        {data.data ? data?.data[index]?.tn.toLocaleString() : 0}
      </td>
    </tr>
  );
}

export default RowTableSuara;
