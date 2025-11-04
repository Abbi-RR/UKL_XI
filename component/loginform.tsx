"use client"; // supaya bisa pakai useRouter dan event handler

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulasi login sederhana
    if (email && password) {
      router.push("/"); // setelah login berhasil → ke landing page
    } else {
      alert("Email dan Password Wajib di isi !");
    }
  };

  return (
    <div className="bg-white shadow-2xl p-8 md:p-10 rounded-2xl w-full max-w-md">
      <h1 className="text-center font-bold text-3xl mb-3">Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="email" className="font-semibold block mb-2">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="yourmail@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-black outline-none"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="font-semibold block mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-black outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white w-full py-3 mb-3 rounded hover:bg-gray-800 transition"
        >
          SIGN IN
        </button>
      </form>

      <div className="text-center">
        <a href="#" className="text-blue-600 hover:underline text-sm">
          Lupa Password?
        </a>
      </div>
    </div>
  );
}
