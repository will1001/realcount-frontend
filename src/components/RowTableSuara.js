import React from "react";

function RowTableSuara({ data, nomor }) {
  return (
    <tr>
      <td class="border">{nomor}</td>
      <td class="border">dapil {nomor}</td>
      <td class="border">
        {data.data ? data?.data[0]?.anggota.toLocaleString() : 0}
      </td>
      <td class="border">
        {data.data ? data?.data[0]?.dpc.toLocaleString() : 0}
      </td>
      <td class="border">
        {data.data ? data?.data[0]?.dpra.toLocaleString() : 0}
      </td>
      <td class="border">
        {data.data ? data?.data[0]?.bko.toLocaleString() : 0}
      </td>
      <td class="border">
        {data.data ? data?.data[0]?.bpkk.toLocaleString() : 0}
      </td>
      <td class="border">
        {data.data ? data?.data[0]?.bpu.toLocaleString() : 0}
      </td>
      <td class="border">
        {data.data ? data?.data[0]?.kepemudaan.toLocaleString() : 0}
      </td>
      <td class="border">
        {data.data ? data?.data[0]?.tn.toLocaleString() : 0}
      </td>
    </tr>
  );
}

export default RowTableSuara;
