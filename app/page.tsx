"use client";
import Header from "@/component/header";
import { FaFingerprint, FaChartPie } from "react-icons/fa";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="pt-32 px-6 md:px-16 flex justify-center items-start min-h-screen bg-white">
        <div className="flex flex-col md:flex-row gap-8 w-full md:w-auto">
          {/* Card Presensi */}
          <div
            className="
              bg-red-700 text-white rounded-xl p-6 shadow-lg
              w-full sm:w-[400px] md:w-[450px] lg:w-[500px]
              flex flex-col items-center
            "
          >
            <h2 className="text-lg font-bold mb-4">Status Kehadiran</h2>

            <div className="bg-white rounded-md p-6 flex justify-center items-center">
              <FaFingerprint className="text-gray-500 text-5xl" />
            </div>

            <div className="flex justify-center mt-4">
              <Link
                href="/presensi"
                className="bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all"
              >
                Cek
              </Link>
            </div>
          </div>

          {/* Card Analisis Kehadiran */}
          <div
            className="
              bg-red-700 text-white rounded-xl p-6 shadow-lg
              w-full sm:w-[400px] md:w-[450px] lg:w-[500px]
              flex flex-col items-center
            "
          >
            <h2 className="text-lg font-bold mb-4">Analisis Kehadiran</h2>

            <div className="bg-white rounded-md p-6 flex justify-center items-center">
              <FaChartPie className="text-gray-500 text-5xl" />
            </div>

            <div className="flex justify-center mt-4">
              <Link
                href="/analisa"
                className="bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all"
              >
                Buka
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
