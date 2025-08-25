"use client";
import CVDocument from "./PDFDocument";

import dynamic from "next/dynamic";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
export default function DownloadCV() {
  return (
    <div className="w-full flex justify-center mb-6">
      <PDFDownloadLink
        document={<CVDocument />}
        fileName="cvitae.pdf"
        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-full shadow-lg transition-colors duration-200"
      >
        {({ loading }) =>
          loading ? "Generando PDF..." : "Descargar CV en PDF"
        }
      </PDFDownloadLink>
    </div>
  );
}
