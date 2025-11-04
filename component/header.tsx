"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full shadow-md bg-white/70 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-red-600 tracking-wide px-2 py-1 rounded-md transition-all
             hover:bg-gray-100 hover:text-red-600"
        >
          HOMEPRESENSI
        </Link>

        
        {/* Button */}
        <Link
          href="/user"
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all"
        >
          User
        </Link>
      </div>
    </header>
  );
}
