import { useRouter } from "next/navigation";
import React from "react";

function RowTableSuara({ data, nomor, index }) {
  const router = useRouter();

  return (
    <tr>
      <td class="border">dapil {nomor}</td>
      <td
        class="border cursor-pointer underline text-blue-500"
        onClick={() =>
          router.push(`detail?dapil=${nomor}&id_dpr_level=${index}&id_upa=ada&rekrut=UPA`)
        }
      >
        {data.data ? data?.data[index]?.anggota.toLocaleString() : 0}
      </td>
      <td
        class="border cursor-pointer underline text-blue-500"
        onClick={() =>
          router.push(
            `detail?dapil=${nomor}&id_dpr_level=${index}&id_sub_category=5&rekrut=DPC`
          )
        }
      >
        {data.data ? data?.data[index]?.dpc.toLocaleString() : 0}
      </td>
      <td
        class="border cursor-pointer underline text-blue-500"
        onClick={() =>
          router.push(
            `detail?dapil=${nomor}&id_dpr_level=${index}&id_sub_category=6&rekrut=DPRA`
          )
        }
      >
        {data.data ? data?.data[index]?.dpra.toLocaleString() : 0}
      </td>
      <td
        class="border cursor-pointer underline text-blue-500"
        onClick={() =>
          router.push(
            `detail?dapil=${nomor}&id_dpr_level=${index}&id_category=5&rekrut=BKO`
          )
        }
      >
        {data.data ? data?.data[index]?.bko.toLocaleString() : 0}
      </td>
      <td
        class="border cursor-pointer underline text-blue-500"
        onClick={() =>
          router.push(
            `detail?dapil=${nomor}&id_dpr_level=${index}&id_category=4&rekrut=BPKK`
          )
        }
      >
        {data.data ? data?.data[index]?.bpkk.toLocaleString() : 0}
      </td>
      <td
        class="border cursor-pointer underline text-blue-500"
        onClick={() =>
          router.push(
            `detail?dapil=${nomor}&id_dpr_level=${index}&id_category=7&rekrut=BPU`
          )
        }
      >
        {data.data ? data?.data[index]?.bpu.toLocaleString() : 0}
      </td>
      <td
        class="border cursor-pointer underline text-blue-500"
        onClick={() =>
          router.push(
            `detail?dapil=${nomor}&id_dpr_level=${index}&id_category=6&rekrut=KEPEMUDAAN`
          )
        }
      >
        {data.data ? data?.data[index]?.kepemudaan.toLocaleString() : 0}
      </td>
      <td
        class="border cursor-pointer underline text-blue-500"
        onClick={() =>
          router.push(
            `detail?dapil=${nomor}&id_dpr_level=${index}&id_category=8&rekrut=TANI NELAYAN`
          )
        }
      >
        {data.data ? data?.data[index]?.tn.toLocaleString() : 0}
      </td>
    </tr>
  );
}

export default RowTableSuara;
