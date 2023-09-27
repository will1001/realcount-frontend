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
          router.push(`detail?dapil=${nomor}&id_dpr_level=${index}&id_upa=ada`)
        }
      >
        {data.data ? data?.data[index]?.anggota.toLocaleString() : 0}
      </td>
      <td
        class="border cursor-pointer underline text-blue-500"
        onClick={() =>
          router.push(
            `detail?dapil=${nomor}&id_dpr_level=${index}&id_sub_category=5`
          )
        }
      >
        {data.data ? data?.data[index]?.dpc.toLocaleString() : 0}
      </td>
      <td
        class="border cursor-pointer underline text-blue-500"
        onClick={() =>
          router.push(
            `detail?dapil=${nomor}&id_dpr_level=${index}&id_sub_category=6`
          )
        }
      >
        {data.data ? data?.data[index]?.dpra.toLocaleString() : 0}
      </td>
      <td
        class="border cursor-pointer underline text-blue-500"
        onClick={() =>
          router.push(
            `detail?dapil=${nomor}&id_dpr_level=${index}&id_category=5`
          )
        }
      >
        {data.data ? data?.data[index]?.bko.toLocaleString() : 0}
      </td>
      <td
        class="border cursor-pointer underline text-blue-500"
        onClick={() =>
          router.push(
            `detail?dapil=${nomor}&id_dpr_level=${index}&id_category=4`
          )
        }
      >
        {data.data ? data?.data[index]?.bpkk.toLocaleString() : 0}
      </td>
      <td
        class="border cursor-pointer underline text-blue-500"
        onClick={() =>
          router.push(
            `detail?dapil=${nomor}&id_dpr_level=${index}&id_category=7`
          )
        }
      >
        {data.data ? data?.data[index]?.bpu.toLocaleString() : 0}
      </td>
      <td
        class="border cursor-pointer underline text-blue-500"
        onClick={() =>
          router.push(
            `detail?dapil=${nomor}&id_dpr_level=${index}&id_category=6`
          )
        }
      >
        {data.data ? data?.data[index]?.kepemudaan.toLocaleString() : 0}
      </td>
      <td
        class="border cursor-pointer underline text-blue-500"
        onClick={() =>
          router.push(
            `detail?dapil=${nomor}&id_dpr_level=${index}&id_category=8`
          )
        }
      >
        {data.data ? data?.data[index]?.tn.toLocaleString() : 0}
      </td>
    </tr>
  );
}

export default RowTableSuara;
