import React, { useState } from "react";

const SuaraData = ({ dapil, datas, items }) => {
  return (
    <div className="my-4">
      <h1 className="font-bold">Dapil {dapil}</h1>
      <div className="flex justify-between">
        {(datas?.data ? datas?.data : []).map((e, i) => {
          return (
            <div key={i}>
              <div>
                <h1>{items[i].text}</h1>
                <li>anggota = {e.anggota}</li>
                <li>dpc = {e.dpc}</li>
                <li>dpra = {e.dpra}</li>
                <li>bko = {e.bko}</li>
                <li>bpkk = {e.bpkk}</li>
                <li>bpu = {e.bpu}</li>
                <li>bpu = {e.bpu}</li>
                <li>kepemudaan = {e.kepemudaan}</li>
                <li>tn = {e.tn}</li>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuaraData;
