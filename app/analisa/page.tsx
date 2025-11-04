"use client";
import { useState } from "react";
import Header from "@/component/header";

export default function AnalisisPage() {
  // Data dummy kehadiran
  const [data] = useState([
    { nama: "Abimanyu Putra", hadir: 20, izin: 2, alfa: 1 },
    { nama: "Siti Rahma", hadir: 19, izin: 3, alfa: 1 },
    { nama: "Bagas Pratama", hadir: 22, izin: 1, alfa: 0 },
    { nama: "Dewi Lestari", hadir: 18, izin: 2, alfa: 3 },
  ]);

  return (
  <>
    <Header /> 
    <main className="min-h-screen bg-gray-50 p-6 mt-20 md:p-12">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-red-600 mb-6 text-center">
          Analisis Kehadiran
        </h1>

        {/* tabel kehadiran */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="py-3 px-4 text-left">Nama</th>
                <th className="py-3 px-4">Hadir</th>
                <th className="py-3 px-4">Izin</th>
                <th className="py-3 px-4">Alfa</th>
                <th className="py-3 px-4">Persentase Kehadiran</th>
              </tr>
            </thead>
            <tbody>
              {data.map((siswa, i) => {
                const total = siswa.hadir + siswa.izin + siswa.alfa;
                const persentase = Number(
                  ((siswa.hadir / total) * 100).toFixed(1)
                );

                return (
                  <tr
                    key={i}
                    className={`border-b hover:bg-gray-100 ${
                      persentase < 80 ? "bg-red-50" : ""
                    }`}
                  >
                    <td className="py-3 px-4 font-medium">{siswa.nama}</td>
                    <td className="py-3 px-4 text-center">{siswa.hadir}</td>
                    <td className="py-3 px-4 text-center">{siswa.izin}</td>
                    <td className="py-3 px-4 text-center">{siswa.alfa}</td>
                    <td
                      className={`py-3 px-4 text-center font-semibold ${
                        persentase < 80 ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {persentase}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* summary ringkas */}
        <div className="mt-8 text-center text-gray-700">
          <p className="font-semibold">Total Siswa: {data.length}</p>
          <p className="text-sm text-gray-500 mt-2">
            Warna merah menandakan kehadiran di bawah 80%.
          </p>
        </div>
      </div>
    </main>
  </>
);
}
