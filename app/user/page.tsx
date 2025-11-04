import Header from "@/component/header"

export default function UserPage() {
  return (
    <>
      <Header />

      <main className="pt-24 p-6  md:p-12">
        <h1 className="text-3xl font-bold mt-30 mb-12 text-center text-red-600">
          Manajemen Pengguna
        </h1>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">Nama</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Role</th>
                <th className="p-3 border">Password</th>
                <th className="p-3 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">Abimanyu</td>
                <td className="p-3 border">abimanyu@example.com</td>
                <td className="p-3 border">Siswa</td>
                <td className="p-3 border">admin#1234</td>
                <td className="p-3 border">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button className="text-red-600 hover:underline">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
          + Tambah Pengguna
        </button>
      </main>
    </>
  );
}