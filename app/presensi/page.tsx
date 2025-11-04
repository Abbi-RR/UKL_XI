"use client";
import { useState } from "react";
import PresensiTable from "@/component/presensitable";
import Header from "@/component/header";

export default function PresensiPage() {
  const [data, setData] = useState([
    { id: 1, nama: "Abimanyu", status: "" },
    { id: 2, nama: "Dewi", status: "" },
    { id: 3, nama: "Rafi", status: "" },
    { id: 4, nama: "Laras", status: "" },
  ]);

  const ubahStatus = (id: number, status: string) => {
    setData(data.map((s) => (s.id === id ? { ...s, status } : s)));
  };

  return (
  <>
    <Header /> 
    <main className="min-h-screen bg-gray-50 p-6 mt-20 md:p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-2">
          PRESENSI MOKLET
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Tanggal: {new Date().toLocaleDateString("id-ID")}
        </p>

        <PresensiTable data={data} ubahStatus={ubahStatus} />

        <div className="mt-8 text-center">
          <h2 className="text-lg font-semibold mb-2">Rekap Hari Ini:</h2>
          <p className="text-gray-600">
            Hadir: {data.filter((d) => d.status === "Hadir").length} siswa, Izin:{" "}
            {data.filter((d) => d.status === "Izin").length}, Sakit:{" "}
            {data.filter((d) => d.status === "Sakit").length}, Alpa:{" "}
            {data.filter((d) => d.status === "Alpa").length}
          </p>
        </div>
      </div>
    </main>
  </>
);
}
