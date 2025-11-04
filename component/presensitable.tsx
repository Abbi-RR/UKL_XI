"use client";

interface Siswa {
  id: number;
  nama: string;
  status: string;
}

export default function PresensiTable({
  data,
  ubahStatus,
}: {
  data: Siswa[];
  ubahStatus: (id: number, status: string) => void;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">No</th>
            <th className="p-3 border">Nama Siswa</th>
            <th className="p-3 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((siswa, index) => (
            <tr key={siswa.id} className="text-center">
              <td className="p-3 border">{index + 1}</td>
              <td className="p-3 border text-left">{siswa.nama}</td>
              <td className="p-3 border">
                <div className="flex justify-center gap-2 flex-wrap">
                  {["Hadir", "Izin", "Sakit", "Alpa"].map((status) => (
                    <button
                      key={status}
                      onClick={() => ubahStatus(siswa.id, status)}
                      className={`px-3 py-1 rounded-md text-sm font-semibold transition-all ${
                        siswa.status === status
                          ? "bg-red-600 text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
