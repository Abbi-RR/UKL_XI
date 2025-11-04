"use client";
import LoginForm from "@/component/loginform";

export default function LoginPage() {
  return (
    <main className="flex flex-col-reverse md:flex-row min-h-screen">
      {/* Bagian kiri (form login) */}
      
      <section className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 md:p-12">
  <div className="mb-10 text-center flex flex-col items-center">
    <h1 className="text-3xl md:text-4xl font-extrabold text-red-600 tracking-wide drop-shadow-sm mb-8 md:mb-12">
      PRESENSI <span className="text-black">MOKLET</span>
    </h1>

    <LoginForm />
  </div>
</section>


      {/* Bagian kanan (gambar + teks) */}
<section className="relative w-full md:w-1/2 bg-[url('/telkom.jpeg')] bg-cover bg-center flex items-center justify-center text-center text-white min-h-[40vh] md:min-h-full">

  {/* overlay gelap */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* GRADIENT BLEND KIRI ↔ PUTIH */}
  <div className="absolute left-0 top-0 w-60 h-full bg-gradient-to-l from-transparent to-white"></div>

  <div className="relative z-10 px-6 md:px-16">
    <h1 className="text-4xl md:text-6xl font-extrabold text-red-600 tracking-wide drop-shadow-sm mb-8 md:mb-4">
      PRESENSI <span className="text-white">MOKLET</span>
    </h1>
  </div>
</section>
    </main>
  );
}
