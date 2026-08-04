import { useState } from "react";

import type { GuideDto } from "../../../../../interfaces";

import { pdf } from "@react-pdf/renderer";
import emailjs from "@emailjs/browser";

import { CreatePDF } from "../createPDF/CreatePDF";

import style from "./shipmentGuide.module.css";

interface Props {
  data: GuideDto;
}

export const ShipmentGuide = ({ data }: Props) => {

  const [loading, setLoading] = useState(false);

  const handleGenerateGuide = async () => {
    try {
      setLoading(true);

      // 1. Generar PDF
      const pdfDocument = (
        <CreatePDF
          data={data}
        />
      );

      const blob = await pdf(pdfDocument).toBlob();

      // 2. Descargar PDF
      const url = URL.createObjectURL(blob);

      const downloadLink = window.document.createElement("a");

      downloadLink.href = url;
      downloadLink.download = `guia-envio-${data.code}.pdf`;

      window.document.body.appendChild(downloadLink);

      downloadLink.click();

      window.document.body.removeChild(downloadLink);

      URL.revokeObjectURL(url);

      // 3. Enviar JSON por email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          guide_number: data.code,
          guide_data: JSON.stringify(data, null, 2),
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
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