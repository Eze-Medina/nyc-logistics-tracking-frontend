import { pdf } from "@react-pdf/renderer";
import emailjs from "@emailjs/browser";
import { useState } from "react";

import { CreatePDF } from "./CreatePDF";
import type { DataGuide } from "../../helpers/DataGuide";
import style from "./guide.module.css";

interface DataType {
  data: DataGuide;
  numero: number;
}

export const Guide = ({ data, numero }: DataType) => {

  const [loading, setLoading] = useState(false);

  const handleGenerateGuide = async () => {
    try {
      setLoading(true);

      // =========================
      // 1. Generar PDF
      // =========================

      const pdfDocument = (
        <CreatePDF
          data={data}
          numero={numero}
        />
      );

      const blob = await pdf(pdfDocument).toBlob();

      // =========================
      // 2. Descargar PDF
      // =========================

      const url = URL.createObjectURL(blob);

      const downloadLink = window.document.createElement("a");

      downloadLink.href = url;
      downloadLink.download = `guia-envio-${numero}.pdf`;

      window.document.body.appendChild(downloadLink);

      downloadLink.click();

      window.document.body.removeChild(downloadLink);

      URL.revokeObjectURL(url);

      // =========================
      // 3. Enviar JSON por email
      // =========================

      await emailjs.send(
        'service_tkr61ei',
        'template_hrgwbaj',
        {
          guide_number: numero,
          guide_data: JSON.stringify(data, null, 2),
        },
        {
          publicKey: 'E3Rnosq-APmm1cMRh',
        }
      );

      console.log("Guía enviada generada correctamente");

    } catch (error) {
      console.error(
        "Error generando o enviando la guía:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        className={style.button}
        type="button"
        onClick={handleGenerateGuide}
        disabled={loading}
      >
        {loading
          ? "Generando guía..."
          : "Descargar Guía de Envío"}
      </button>
    </div>
  );
};